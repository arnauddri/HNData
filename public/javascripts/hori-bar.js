var showTopSources = function() {
  var margin = {top: 20, right: 20, bottom: 50, left: 65},
    width = 750 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

  var x = d3.scale.ordinal()
      .rangeRoundBands([0, width], .1);

  var y = d3.scale.linear()
      .rangeRound([height, 0]);

  var color = d3.scale.ordinal()
      .range(["#D9773F", "#f09765"]);

  var xAxis = d3.svg.axis()
      .scale(x)
      .orient("bottom");

  var svg = d3.select("body #hori-bar").append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  var barHeight = 20;

  d3.csv("./data/hori-bar/top_sources.csv", function(error, data) {
    data.forEach(function(d) {
      d.value = +d.value;
    });
    var x = d3.scale.linear()
      .range([0, width - 100]);

    x.domain([0, d3.max(data, function(d) { return d.value; })]);

    svg.append("g")
        .attr("class", "bar-container").selectAll(".bar")
        .data(data)
      .enter().append("rect")
        .attr("class", "bar")
        .attr("transform", function(d, i) { var ypos = height - (i-1) * barHeight; return "translate(" + 0.2 * width + "," + ypos + ")"; })
        .attr("width", function(d) { return 0; })
        .attr("height", barHeight - 1)
        .style("fill", function(d) { return color(d.name); });

    svg.selectAll(".bar")
        .data(data)
        .transition()
        .duration(1000)
        .attr("width", function(d) { return x(d.value); });

    svg.append("g")
        .attr("class", "legend-container")
        .selectAll(".legend")
        .data(data)
        .enter()
        .append("text")
        .attr("class", "legend")
        .attr("x", function(d) { return 120; })
        .style("text-anchor", "end")
        .attr("y", barHeight / 2 + 4)
        .attr("transform", function(d, i) { var ypos = height - (i-1) * barHeight ; return "translate(0," + ypos + ")"; })
        .text(function(d) { return d.key; });

    svg.append("g")
        .attr("class", "value-container")
        .selectAll(".value")
        .data(data)
        .enter()
        .append("text")
        .attr("class", "value")
        .attr("x", function(d) { return x(d.value) + 120; })
        .style("text-anchor", "end")
        .style("fill", "#fff")
        .attr("y", barHeight / 2 + 4)
        .attr("transform", function(d, i) { var ypos = height - (i-1) * barHeight ; return "translate(0," + ypos + ")"; })
        .text(function(d) { return d.value; });
  });

  function type(d) {
    d.Users = +d.Users;
    return d;
  }
}
