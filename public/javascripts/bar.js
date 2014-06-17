var margin = {top: 20, right: 60, bottom: 30, left: 60},
    width = 960 - margin.left - margin.right,
    height = 450 - margin.top - margin.bottom;

var x = d3.scale.ordinal()
    .rangeRoundBands([0, width], .1);

var y = d3.scale.linear()
    .rangeRound([height, 0]);

var color = d3.scale.ordinal()
    .range(["#D9773F", "#f09765"]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("right")
    .tickFormat(d3.format(".2s"));

var svg = d3.select("body #bar-chart").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var showSubmissionChart = function() {
  d3.csv("./data/bar/submissions.csv", function(error, data) {
    color.domain(d3.keys(data[0]).filter(function(key) { return key !== "Quarter"; }));

    data.forEach(function(d) {
      var y0 = 0;
      d.ages = color.domain().map(function(name) { return {name: name, y0: y0, y1: y0 += +d[name]}; });
      d.total = d.ages[d.ages.length - 1].y1;
    });

    x.domain(data.map(function(d) { return d.Quarter; }));
    y.domain([0, d3.max(data, function(d) { return d.total; })]);

    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);

    svg.append("g")
        .attr("class", "y axis")
        .attr("transform", "translate(" + width + ", 0)")
        .call(yAxis);

    var state = svg.selectAll(".state")
        .data(data)
      .enter().append("g")
        .attr("class", "g")
        .attr("transform", function(d) { return "translate(" + x(d.Quarter) + ",0)"; });

    state.selectAll(".bar.submissions")
        .data(function(d) { return d.ages; })
      .enter().append("rect")
        .attr("class", "bar submissions")
        .attr("width", x.rangeBand())
        .attr("x", function(d) { return x(d.Quarter); })
        .attr("y", function(d) { return height; })
        .attr("height", function(d) { return 0; })
        .style("fill", function(d) { return color(d.name); });

    state.selectAll(".bar.submissions")
        .attr("class", "bar submissions")
        .attr("width", x.rangeBand())
        .transition()
        .duration(500)
        .delay(200)
        .attr("x", function(d) { return x(d.Quarter); })
        .attr("y", function(d) { return y(d.y1); })
        .attr("height", function(d) { return y(d.y0) - y(d.y1); });

    var legend = svg.selectAll(".legend")
        .data(color.domain().slice().reverse())
      .enter().append("g")
        .attr("class", "legend")
        .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });

    legend.append("rect")
        .attr("x", margin.left + 28)
        .attr("width", 18)
        .attr("height", 18)
        .style("fill", color);

    legend.append("text")
        .attr("x", margin.left + 20)
        .attr("y", 9)
        .attr("dy", ".35em")
        .style("text-anchor", "end")
        .text(function(d) { return d; });

    svg.selectAll('.x.axis .tick')
      .each(function(d, i){
        if (i%4 !== 0)
          d3.select(this)
            .text('');
      });

    svg.selectAll('.y.axis .tick')
      .each(function(d, i){
        if (i%2 !== 0)
          d3.select(this)
            .text('');
      });

    svg.append("line")
        .attr("class", "growth-line")
        .attr("x1", x("Q1 '07"))
        .attr("y1", y(0))
        .attr("x2", x("Q1 '14"))
        .attr("y2", y(0))
        .transition()
        .duration(800)
        .attr("y1", y(20683))
        .attr("y2", y(490379))
        .style("stroke", "#999")
        .style("opacity", 0.6)
        .style("stroke-width", "3px");

    svg.append("g")
        .attr("class", "growth-container")
        .attr("transform", "translate(" + width * 0.4 + ", 120 )");
        // .append("circle")
        // .attr("r", 40)
        // .style("fill", "rgba(255, 255, 255, 0.4")
        // .style("stroke", "#999")
        // .style("stroke-width", "3px");

    svg.selectAll(".growth-container")
        .append("text")
        .attr("class", "cagr")
        .text('CAGR: 54.3 %');
  });
}

var submissionChart = function() {
  d3.csv("./data/bar/submissions.csv", function(error, data) {

    data.forEach(function(d) {
      var y0 = 0;
      d.ages = color.domain().map(function(name) { return {name: name, y0: y0, y1: y0 += +d[name]}; });
      d.total = d.ages[d.ages.length - 1].y1;
    });

    x.domain(data.map(function(d) { return d.Quarter; }));
    y.domain([0, d3.max(data, function(d) { return d.total; })]);
    svg.selectAll(".bar.submissions")
        .transition()
        .duration(500)
        .style("fill", function(d) { return color(d.name); });

    svg.selectAll(".bar.users")
        .transition()
        .duration(500)
        .attr("y", function(d) { return height; })
        .attr("height", function(d) { return 0; });

    svg.selectAll(".growth-line")
        .transition()
        .duration(500)
        .attr("y1", y(20683))
        .attr("y2", y(490379));

    svg.selectAll(".growth-container text")
        .text("CAGR: 54.3 %");

  });
}

var activeUserChart = function() {
  d3.csv("./data/bar/active_users.csv", type, function(error, data) {
    x.domain(data.map(function(d) { return d.Quarter; }));
    y.domain([0, d3.max(data, function(d) { return d.Users; })]);
    svg.selectAll(".userbar")
        .data(data)
      .enter().append("rect")
        .attr("class", "bar users")
        .attr("fill", "#c45d23")
        .attr("x", function(d) { return x(d.Quarter); })
        .attr("width", x.rangeBand())
        .attr("y", function(d) { return height; })
        .attr("height", function(d) { return 0; })

    svg.selectAll(".bar.submissions")
        .transition()
        .duration(500)
        .style("fill", "#fff");

    svg.selectAll(".bar.users")
        .data(data)
        .transition()
        .duration(500)
        .attr("y", function(d) { return y(d.Users); })
        .attr("height", function(d) { return height - y(d.Users); });

    svg.selectAll(".growth-line")
        .transition()
        .duration(500)
        .attr("y1", y(1000))
        .attr("y2", y(49132));

    svg.selectAll(".growth-container text")
        .text("CAGR: 62.3 %");
  });
}

function type(d) {
  d.Users = +d.Users;
  return d;
}
