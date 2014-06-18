var showTopSources = function() {
  var margin = {top: 20, right: 20, bottom: 50, left: 65},
    width = 750 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

  var x = d3.scale.ordinal()
      .rangeRoundBands([0, width], .1);

  var y = d3.scale.linear()
      .rangeRound([height, 0]);

  var xAxis = d3.svg.axis()
      .scale(x)
      .orient("bottom");

  var svg = d3.select("body #hori-bar").append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  var sources = svg.append("g")
        .attr("class", "sources");

  var barHeight = 30;

  d3.csv("./data/hori-bar/top_domain_100.csv", function(error, data) {
    data.forEach(function(d) {
      d.value = +d.value;
      d.group = +d.group;
      d.index = +d.index;
    });

    var x = d3.scale.linear()
      .range([0, width]);

    x.domain([0, 225]);
    y.domain([0, 10]);

    // Compute the extent of the data set in age and years.
    var index1 = d3.max(data, function(d) { return d.index; }),
        group0 = d3.min(data, function(d) { return d.group; }),
        group1 = d3.max(data, function(d) { return d.group; }),
        group = 10;

    // Produce a map from year and birthyear to [male, female].
    data = d3.nest()
        .key(function(d) { return d.group; })
        .map(data);


    var source = sources.selectAll(".source")
      .data(d3.range(group, group + 10, 1))
    .enter().append("g")
      .attr("class", "source")
      .attr("transform", function(value,index,i) { return "translate(0, " + y(index) + ")"; });

    source.selectAll("rect")
      .data(function(value, index) { return [data[group][index]] || [0, 0];})
    .enter().append("rect")
      .attr("y", function(d,i){ return - barHeight / 2; })
      .attr("height", barHeight)
      .attr("x", 0)
      .attr("width", function(item, index, i) { console.log(item.value); return d3.max([0,x(item.value)]); })
      .attr("fill", "#D9773F");

    // Allow the arrow keys to change the displayed year.
    window.focus();
    d3.select(window).on("keydown", function() {
      switch (d3.event.keyCode) {
        case 37: group = Math.max(group0, group - 10); break;
        case 39: group = Math.min(group1, group + 10); break;
      }
      update();
    });

    function update() {

      // sources.transition()
      //     .duration(750)
      //     .attr("transform", "translate(0," + (y(20)) +")");

      source.selectAll("rect")
        .data(function(value, index) { return [data[group][index]] || [0, 0];})
        .transition()
          .duration(750)
          .attr("x", 0)
          .attr("width", function(item, index, i) { return d3.max([0,x(item.value)]); })
    }
  });
}
