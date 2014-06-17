function showUserKarma() {
  var margin = {top: 20, right: 20, bottom: 30, left: 80},
      width = 960 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom;

  var parseDate = d3.time.format("%d-%b-%y").parse;

  var x = d3.scale.linear()
      .range([0, width]);

  var y = d3.scale.linear()
      .range([height, 0]);

  var xAxis = d3.svg.axis()
      .scale(x)
      .orient("bottom");

  var yAxis = d3.svg.axis()
      .scale(y)
      .orient("left");

  var area = d3.svg.area()
      .interpolate("basis") 
      .x(function(d) { return x(d.karma); })
      .y0(height)
      .y1(function(d) { return y(d.distribution); });

  var svg = d3.select("#karma-chart span").append("svg")
      .attr("id", "karma-svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


  var bisectAbsciss = d3.bisector(function(d) { return d.karma; }).left;

  d3.csv("./data/karma/karma.csv", karmaType, function(error, data) {

    x.domain(d3.extent(data, function(d) { return d.karma; }));
    y.domain([0, d3.max(data, function(d) { return d.distribution; })]);

    svg.append("path")
        .datum(data)
        .attr("class", "karma-area")
        .attr("d", area);

    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);

    svg.append("g")
        .attr("class", "y axis")
        .call(yAxis)
      .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", ".71em")
        .style("text-anchor", "end");

    // Append centile, karma and distribution on chart
    var legendX =  width - 250;
    var legendY =  40;

    svg.append("text")
        .attr("class", "centile")
        .attr("x", legendX)
        .attr("y", legendY + 40)
        .attr("text-anchor", "start")
        .text("Centile:");

    svg.append("text")
        .attr("class", "centile-figure")
        .attr("x", legendX + 180)
        .attr("y", legendY + 40)
        .attr("text-anchor", "end")
        .text("0");

    svg.append("text")
        .attr("class", "karma")
        .attr("x", legendX)
        .attr("y", legendY)
        .attr("text-anchor", "start")
        .text("Karma:");

    svg.append("text")
        .attr("class", "karma-figure")
        .attr("x", legendX + 180)
        .attr("y", legendY)
        .attr("text-anchor", "end")
        .text("0");

    svg.append("text")
        .attr("class", "distribution")
        .attr("x", legendX)
        .attr("y", legendY + 20)
        .attr("text-anchor", "start")
        .text("# of persons:");

    svg.append("text")
        .attr("class", "distribution-figure")
        .attr("x", legendX + 180)
        .attr("y", legendY + 20)
        .attr("text-anchor", "end")
        .text("0");

    hoverLineGroup = svg.append("g")
              .attr("class", "hover-line");

    // add the line to the group
    hoverLine = hoverLineGroup
      .append("svg:line")
        .attr("x1", 10).attr("x2", 10) 
        .attr("y1", 0).attr("y2", height); 

    hoverCircle = hoverLineGroup.append("circle")
        .attr("cx", function(d) { return x(100); }) 
        .attr("cy", function(d) { return y(70000) }) 
        .attr("r", "6");
        
    // hide it by default
    hoverLineGroup.classed("hide", true);

    var handleMouseOverGraph = function(event) {
      var hoverLineXOffset = $('#karma-chart span .karma-area').offset().left;
      var hoverLineYOffset = $('#karma-chart span').offset().top + margin.top;

      var mouseX = event.pageX - hoverLineXOffset;
      var mouseY = event.pageY - hoverLineYOffset;

      //debug("MouseOver graph [" + containerId + "] => x: " + mouseX + " y: " + mouseY + "  height: " + h + " event.clientY: " + event.clientY + " offsetY: " + event.offsetY + " pageY: " + event.pageY + " hoverLineYOffset: " + hoverLineYOffset)
      if(!(mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height))
        return hoverLine.classed("hide", false); 

      // show the hover line
      hoverLineGroup.classed("hide", false);

      // set position of hoverLine
      hoverLine.attr("x1", mouseX).attr("x2", mouseX)
      
      displayValueLabelsForPositionX(mouseX);
      
      var x0 = x.invert(mouseX),
          i = bisectAbsciss(data, x0, 1),
          d0 = data[i - 1],
          d1 = data[i],
          d = x0 - d0.karma > d1.karma - x0 ? d1 : d0;
      
      svg.selectAll("circle")
          .attr("cx", function(d) { return mouseX; }) 
          .attr("cy", function() { return y(d.distribution) });

      svg.selectAll(".centile-figure")
        .text(d.centile + "");

      svg.selectAll(".karma-figure")
        .text(function() { return (d.karma < 10) ? " < 10" : d.karma; });

      svg.selectAll(".distribution-figure")
        .text(d.distribution);

      // user is interacting
      userCurrentlyInteracting = true;
      currentUserPositionX = mouseX;
    };  
    var handleMouseOutGraph = function(event) { 
      // hide the hover-line
      hoverLineGroup.classed("hide", true);
      
      // setValueLabelsToLatest();
      
      //debug("MouseOut graph [" + containerId + "] => " + mouseX + ", " + mouseY)
      
      // user is no longer interacting
      userCurrentlyInteracting = false;
      currentUserPositionX = -1;
    }

    $('#karma-chart span').mousemove(function(event) {
      handleMouseOverGraph(event);
    });
    $('#karma-chart span').mouseleave(function(event) {
      handleMouseOutGraph(event);
    })

  });


  function karmaType(d) {
    d.karma = +d.karma;
    d.distribution = +d.distribution;
    return d;
  }
  /**
   * Called when a user mouses over the graph.
   */


  var displayValueLabelsForPositionX = function(mouseX) {

  };
};