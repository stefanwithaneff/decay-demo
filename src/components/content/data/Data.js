import React from 'react';
import d3 from 'd3';
import { connect } from 'react-redux';
import { kStarSelector } from '../../../modules/data';

const WIDTH = 960;
const HEIGHT = 540;
const margin = {
  top: 0,
  right: 10,
  bottom: 60,
  left: 75,
};

class Data extends React.Component {
  constructor(props) {
    super(props);
    this.d3Render = this.d3Render.bind(this);
    this.graphData = this.graphData.bind(this);
  }

  componentDidMount() {
    this.d3Render();
    this.graphData();
  }

  // Renders the chart
  d3Render() {
    // Append svg to React component
    const svg = d3.select('.data-chart')
      .append('svg')
      .attr('width', WIDTH + margin.left + margin.right)
      .attr('height', HEIGHT + margin.top + margin.bottom)
      .attr('viewBox', `0 0 ${WIDTH + margin.left + margin.right} ${HEIGHT + margin.top + margin.bottom}`); // eslint-disable-line max-len

    // Create chart coordinate space
    const chart = svg.append('g')
      .attr('transform', `translate(${margin.left}, ${margin.top})`);

    // Handle edge case of less than 2 data points
    if (this.props.kArray.length < 2) {
      svg.append('text')
        .attr('class', 'data-info')
        .attr('text-anchor', 'middle')
        .attr('x', (WIDTH + margin.left + margin.right) / 2)
        .attr('y', (HEIGHT + margin.top + margin.bottom) / 2)
        .text('More data required (at least 2 recall attempts)');
      return;
    }

    // Define x and y scale
    this.xScale = d3.scale.linear()
      .domain([0, this.props.kArray.length])
      .range([0, WIDTH]);

    this.yScale = d3.scale.linear()
      .domain([0, Math.exp(this.props.kStar.intercept)])
      .range([HEIGHT, 0]);

    // Plot data onto chart
    chart.selectAll('circle')
      .data(this.props.kArray)
      .enter()
      .append('circle')
      .attr('class', 'data-point')
      .attr('cx', (d, i) => this.xScale(i))
      .attr('cy', (d) => this.yScale(d))
      .attr('r', '10')
      .attr('fill', 'hsl(209, 100%, 50%)');

    // Plot axes
    const xAxis = d3.svg.axis().scale(this.xScale).orient('bottom');
    const yAxis = d3.svg.axis().scale(this.yScale).orient('left').ticks(2);

    chart.append('g')
      .attr('class', 'x axis')
      .attr('transform', `translate(0, ${HEIGHT})`)
      .call(xAxis);

    chart.append('g')
      .attr('class', 'y axis')
      .call(yAxis);

    // Add axis labels
    chart.append('text')
      .attr('class', 'chart-label')
      .attr('text-anchor', 'middle')
      .attr('x', WIDTH / 2)
      .attr('y', HEIGHT + 50)
      .text('Number of Recall Attempts');

    chart.append('text')
      .attr('class', 'chart-label')
      .attr('text-anchor', 'middle')
      .attr('transform', `translate(-50, ${HEIGHT / 2}) rotate(-90)`)
      .text('Predicted k-Value (lower is better)');
  }

  // Renders the k* line
  graphData() {
    if (this.props.kArray.length < 2) return;

    const ctx = this.graph.getContext('2d');
    ctx.save();

    // Configure drawing context
    ctx.translate(margin.left, margin.top);
    ctx.strokeStyle = 'hsl(209, 25%, 25%)';
    ctx.lineWidth = 5;
    ctx.lineCap = 'round';

    // Move to line starting point
    ctx.beginPath();
    ctx.moveTo(0, 0);

    // Draw k* line: y=e^(mx+b)
    for (let i = 1; i < WIDTH; i++) {
      const exponent = this.props.kStar.slope * this.xScale.invert(i) + this.props.kStar.intercept;
      ctx.lineTo(i, this.yScale(Math.exp(exponent)));
    }

    // Render to canvas
    ctx.stroke();

    // Reset drawing context
    ctx.restore();
  }

  render() {
    return (
      <div className="content data">
        <div className="data-main">
          <h1 className="data-title">
            Log-linear Least-Squares Regression of k-Value vs. Number of Attempts
          </h1>
          <div className="data-vis">
            <div className="data-chart" />
            <canvas ref={(e) => { this.graph = e; }}
              className="data-graph"
              width={`${WIDTH + margin.left + margin.right}`}
              height={`${HEIGHT + margin.top + margin.bottom}`}
            />
          </div>
        </div>
      </div>
    );
  }
}

Data.propTypes = {
  kStar: React.PropTypes.object,
  kArray: React.PropTypes.array.isRequired,
};

function mapStateToProps(state) {
  return {
    kArray: state.get('data').toArray(),
    kStar: kStarSelector(state),
  };
}

export default connect(mapStateToProps)(Data);
