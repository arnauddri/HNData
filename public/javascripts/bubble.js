

var showTopKeywords = function(){

  $("#g-chart").show();
  $("#g-chart").width(900);

var data = {};

(function() {

data.topics = [
  {'q1': ' 197', 'count': ' 162', 'q3': ' 166', 'q2': ' 217', 'name': 'Firefox', 're': '/\x08()\x08/gi', 'y': 183, 'x': 434, 'q4': ' 162'},
  {'q1': ' 863', 'count': ' 607', 'q3': ' 702', 'q2': ' 986', 'name': 'Apple', 're': '/\x08()\x08/gi', 'y': 153, 'x': 475, 'q4': ' 607'},
  {'q1': ' 808', 'count': ' 501', 'q3': ' 928', 'q2': ' 1297', 'name': 'NSA', 're': '/\x08()\x08/gi', 'y': 289, 'x': 194, 'q4': ' 501'},
  {'q1': ' 85', 'count': ' 98', 'q3': ' 95', 'q2': ' 94', 'name': 'SQL', 're': '/\x08()\x08/gi', 'y': 144, 'x': 146, 'q4': ' 98'},
  {'q1': ' 43', 'count': ' 117', 'q3': ' 170', 'q2': ' 48', 'name': 'Snapchat', 're': '/\x08()\x08/gi', 'y': 211, 'x': 312, 'q4': ' 117'},
  {'q1': ' 464', 'count': ' 291', 'q3': ' 395', 'q2': ' 483', 'name': 'Linux', 're': '/\x08()\x08/gi', 'y': 68, 'x': 248, 'q4': ' 291'},
  {'q1': ' 134', 'count': ' 133', 'q3': ' 133', 'q2': ' 143', 'name': 'Line', 're': '/\x08()\x08/gi', 'y': 118, 'x': 479, 'q4': ' 133'},
  {'q1': ' 190', 'count': ' 69', 'q3': ' 129', 'q2': ' 102', 'name': 'Raspberry Pi', 're': '/\x08()\x08/gi', 'y': 242, 'x': 287, 'q4': ' 69'},
  {'q1': ' 361', 'count': ' 274', 'q3': ' 267', 'q2': ' 297', 'name': 'Java', 're': '/\x08()\x08/gi', 'y': 61, 'x': 158, 'q4': ' 274'},
  {'q1': ' 267', 'count': ' 284', 'q3': ' 297', 'q2': ' 307', 'name': 'Chrome', 're': '/\x08()\x08/gi', 'y': 295, 'x': 193, 'q4': ' 284'},
  {'q1': ' 863', 'count': ' 1288', 'q3': ' 1499', 'q2': ' 484', 'name': 'Bitcoin', 're': '/\x08()\x08/gi', 'y': 282, 'x': 399, 'q4': ' 1288'},
  {'q1': ' 277', 'count': ' 242', 'q3': ' 288', 'q2': ' 267', 'name': 'Rails', 're': '/\x08()\x08/gi', 'y': 103, 'x': 285, 'q4': ' 242'},
  {'q1': ' 100', 'count': ' 104', 'q3': ' 87', 'q2': ' 87', 'name': 'Mark Zuckerberg', 're': '/\x08()\x08/gi', 'y': 195, 'x': 238, 'q4': ' 104'},
  {'q1': ' 230', 'count': ' 134', 'q3': ' 182', 'q2': ' 199', 'name': 'wordpress', 're': '/\x08()\x08/gi', 'y': 264, 'x': 516, 'q4': ' 134'},
  {'q1': ' 52', 'count': ' 81', 'q3': ' 55', 'q2': ' 58', 'name': 'DNS', 're': '/\x08()\x08/gi', 'y': 273, 'x': 314, 'q4': ' 81'},
  {'q1': ' 49', 'count': ' 294', 'q3': ' 38', 'q2': ' 14', 'name': 'Whatsapp', 're': '/\x08()\x08/gi', 'y': 230, 'x': 578, 'q4': ' 294'},
  {'q1': ' 517', 'count': ' 495', 'q3': ' 520', 'q2': ' 534', 'name': 'python', 're': '/\x08()\x08/gi', 'y': 150, 'x': 450, 'q4': ' 495'},
  {'q1': ' 65', 'count': ' 107', 'q3': ' 119', 'q2': ' 49', 'name': 'YC', 're': '/\x08()\x08/gi', 'y': 77, 'x': 216, 'q4': ' 107'},
  {'q1': ' 73', 'count': ' 79', 'q3': ' 81', 'q2': ' 91', 'name': 'PayPal', 're': '/\x08()\x08/gi', 'y': 120, 'x': 108, 'q4': ' 79'},
  {'q1': ' 321', 'count': ' 181', 'q3': ' 193', 'q2': ' 245', 'name': 'Yahoo', 're': '/\x08()\x08/gi', 'y': 59, 'x': 448, 'q4': ' 181'},
  {'q1': ' 58', 'count': ' 72', 'q3': ' 61', 'q2': ' 67', 'name': 'SSL', 're': '/\x08()\x08/gi', 'y': 231, 'x': 439, 'q4': ' 72'},
  {'q1': ' 322', 'count': ' 296', 'q3': ' 466', 'q2': ' 352', 'name': 'Amazon', 're': '/\x08()\x08/gi', 'y': 124, 'x': 180, 'q4': ' 296'},
  {'q1': ' 1119', 'count': ' 982', 'q3': ' 736', 'q2': ' 788', 'name': 'Facebook', 're': '/\x08()\x08/gi', 'y': 231, 'x': 143, 'q4': ' 982'},
  {'q1': ' 25', 'count': ' 70', 'q3': ' 6', 'q2': ' 14', 'name': 'Atom', 're': '/\x08()\x08/gi', 'y': 107, 'x': 223, 'q4': ' 70'},
  {'q1': ' 68', 'count': ' 71', 'q3': ' 40', 'q2': ' 50', 'name': 'Sony', 're': '/\x08()\x08/gi', 'y': 236, 'x': 340, 'q4': ' 71'},
  {'q1': ' 134', 'count': ' 121', 'q3': ' 77', 'q2': ' 73', 'name': 'Mozilla', 're': '/\x08()\x08/gi', 'y': 243, 'x': 592, 'q4': ' 121'},
  {'q1': ' 301', 'count': ' 267', 'q3': ' 303', 'q2': ' 270', 'name': 'Ruby', 're': '/\x08()\x08/gi', 'y': 249, 'x': 349, 'q4': ' 267'},
  {'q1': ' 125', 'count': ' 114', 'q3': ' 98', 'q2': ' 136', 'name': 'Intel', 're': '/\x08()\x08/gi', 'y': 112, 'x': 524, 'q4': ' 114'},
  {'q1': ' 180', 'count': ' 119', 'q3': ' 247', 'q2': ' 169', 'name': 'iPad', 're': '/\x08()\x08/gi', 'y': 205, 'x': 165, 'q4': ' 119'},
  {'q1': ' 94', 'count': ' 92', 'q3': ' 96', 'q2': ' 81', 'name': 'IBM', 're': '/\x08()\x08/gi', 'y': 50, 'x': 526, 'q4': ' 92'},
  {'q1': ' 0', 'count': ' 263', 'q3': ' 0', 'q2': ' 0', 'name': 'Flappy Bird', 're': '/\x08()\x08/gi', 'y': 180, 'x': 472, 'q4': ' 263'},
  {'q1': ' 45', 'count': ' 203', 'q3': ' 27', 'q2': ' 32', 'name': 'Oculus', 're': '/\x08()\x08/gi', 'y': 137, 'x': 66, 'q4': ' 203'},
  {'q1': ' 111', 'count': ' 121', 'q3': ' 117', 'q2': ' 131', 'name': 'C++', 're': '/\x08()\x08/gi', 'y': 222, 'x': 534, 'q4': ' 121'},
  {'q1': ' 52', 'count': ' 90', 'q3': ' 65', 'q2': ' 77', 'name': 'eBay', 're': '/\x08()\x08/gi', 'y': 96, 'x': 145, 'q4': ' 90'},
  {'q1': ' 67', 'count': ' 94', 'q3': ' 65', 'q2': ' 94', 'name': 'Russia', 're': '/\x08()\x08/gi', 'y': 165, 'x': 133, 'q4': ' 94'},
  {'q1': ' 37', 'count': ' 112', 'q3': ' 54', 'q2': ' 77', 'name': 'Uber', 're': '/\x08()\x08/gi', 'y': 195, 'x': 557, 'q4': ' 112'},
  {'q1': ' 3060', 'count': ' 1965', 'q3': ' 2155', 'q2': ' 2238', 'name': 'Google', 're': '/\x08()\x08/gi', 'y': 92, 'x': 425, 'q4': ' 1965'},
  {'q1': ' 285', 'count': ' 278', 'q3': ' 264', 'q2': ' 261', 'name': 'NodeJS', 're': '/\x08()\x08/gi', 'y': 183, 'x': 186, 'q4': ' 278'},
  {'q1': ' 214', 'count': ' 168', 'q3': ' 175', 'q2': ' 156', 'name': 'Tesla', 're': '/\x08()\x08/gi', 'y': 283, 'x': 168, 'q4': ' 168'},
  {'q1': ' 669', 'count': ' 531', 'q3': ' 751', 'q2': ' 585', 'name': 'Twitter', 're': '/\x08()\x08/gi', 'y': 180, 'x': 525, 'q4': ' 531'},
  {'q1': ' 141', 'count': ' 96', 'q3': ' 95', 'q2': ' 134', 'name': 'LinkedIn', 're': '/\x08()\x08/gi', 'y': 239, 'x': 469, 'q4': ' 96'},
  {'q1': ' 6', 'count': ' 101', 'q3': ' 7', 'q2': ' 8', 'name': 'Malaysia', 're': '/\x08()\x08/gi', 'y': 249, 'x': 283, 'q4': ' 101'},
  {'q1': ' 15', 'count': ' 69', 'q3': ' 17', 'q2': ' 24', 'name': 'Candy Crush', 're': '/\x08()\x08/gi', 'y': 298, 'x': 254, 'q4': ' 69'},
  {'q1': ' 161', 'count': ' 167', 'q3': ' 174', 'q2': ' 185', 'name': 'AngularJS', 're': '/\x08()\x08/gi', 'y': 250, 'x': 74, 'q4': ' 167'},
  {'q1': ' 194', 'count': ' 127', 'q3': ' 137', 'q2': ' 176', 'name': 'Gmail', 're': '/\x08()\x08/gi', 'y': 231, 'x': 379, 'q4': ' 127'},
  {'q1': ' 117', 'count': ' 83', 'q3': ' 121', 'q2': ' 113', 'name': 'Scala', 're': '/\x08()\x08/gi', 'y': 171, 'x': 253, 'q4': ' 83'},
  {'q1': ' 65', 'count': ' 79', 'q3': ' 76', 'q2': ' 76', 'name': 'Wikipedia', 're': '/\x08()\x08/gi', 'y': 111, 'x': 269, 'q4': ' 79'},
  {'q1': ' 467', 'count': ' 233', 'q3': ' 308', 'q2': ' 579', 'name': 'Snowden', 're': '/\x08()\x08/gi', 'y': 290, 'x': 458, 'q4': ' 233'},
  {'q1': ' 97', 'count': ' 70', 'q3': ' 71', 'q2': ' 53', 'name': 'Airbnb', 're': '/\x08()\x08/gi', 'y': 153, 'x': 274, 'q4': ' 70'},
  {'q1': ' 84', 'count': ' 113', 'q3': ' 131', 'q2': ' 79', 'name': 'Drone', 're': '/\x08()\x08/gi', 'y': 222, 'x': 488, 'q4': ' 113'},
  {'q1': ' 39', 'count': ' 229', 'q3': ' 4', 'q2': ' 8', 'name': 'Mt. Gox', 're': '/\x08()\x08/gi', 'y': 139, 'x': 183, 'q4': ' 229'},
  {'q1': ' 878', 'count': ' 661', 'q3': ' 855', 'q2': ' 906', 'name': 'Android', 're': '/\x08()\x08/gi', 'y': 268, 'x': 180, 'q4': ' 661'},
  {'q1': ' 268', 'count': ' 189', 'q3': ' 251', 'q2': ' 261', 'name': 'CSS', 're': '/\x08()\x08/gi', 'y': 130, 'x': 430, 'q4': ' 189'},
  {'q1': ' 131', 'count': ' 95', 'q3': ' 108', 'q2': ' 162', 'name': 'Reddit', 're': '/\x08()\x08/gi', 'y': 111, 'x': 515, 'q4': ' 95'},
  {'q1': ' 13', 'count': ' 93', 'q3': ' 4', 'q2': ' 5', 'name': 'SXSW', 're': '/\x08()\x08/gi', 'y': 75, 'x': 433, 'q4': ' 93'},
  {'q1': ' 194', 'count': ' 119', 'q3': ' 134', 'q2': ' 155', 'name': 'Kickstarter', 're': '/\x08()\x08/gi', 'y': 148, 'x': 342, 'q4': ' 119'},
  {'q1': ' 103', 'count': ' 80', 'q3': ' 107', 'q2': ' 94', 'name': 'MongoDB', 're': '/\x08()\x08/gi', 'y': 221, 'x': 321, 'q4': ' 80'},
  {'q1': ' 16', 'count': ' 96', 'q3': ' 26', 'q2': ' 20', 'name': 'Nest', 're': '/\x08()\x08/gi', 'y': 128, 'x': 168, 'q4': ' 96'},
  {'q1': ' 698', 'count': ' 562', 'q3': ' 668', 'q2': ' 650', 'name': 'Javascript', 're': '/\x08()\x08/gi', 'y': 290, 'x': 570, 'q4': ' 562'},
  {'q1': ' 838', 'count': ' 588', 'q3': ' 637', 'q2': ' 876', 'name': 'iOS', 're': '/\x08()\x08/gi', 'y': 232, 'x': 413, 'q4': ' 588'},
  {'q1': ' 115', 'count': ' 145', 'q3': ' 89', 'q2': ' 100', 'name': 'Netflix', 're': '/\x08()\x08/gi', 'y': 222, 'x': 307, 'q4': ' 145'},
  {'q1': ' 346', 'count': ' 194', 'q3': ' 215', 'q2': ' 308', 'name': 'HTML5', 're': '/\x08()\x08/gi', 'y': 146, 'x': 386, 'q4': ' 194'},
  {'q1': ' 184', 'count': ' 96', 'q3': ' 123', 'q2': ' 266', 'name': 'Ubuntu', 're': '/\x08()\x08/gi', 'y': 161, 'x': 249, 'q4': ' 96'},
  {'q1': ' 67', 'count': ' 71', 'q3': ' 57', 'q2': ' 73', 'name': 'Apache', 're': '/\x08()\x08/gi', 'y': 163, 'x': 286, 'q4': ' 71'},
  {'q1': ' 123', 'count': ' 134', 'q3': ' 91', 'q2': ' 174', 'name': 'Dropbox', 're': '/\x08()\x08/gi', 'y': 282, 'x': 515, 'q4': ' 134'},
  {'q1': ' 244', 'count': ' 198', 'q3': ' 199', 'q2': ' 274', 'name': 'php', 're': '/\x08()\x08/gi', 'y': 290, 'x': 207, 'q4': ' 198'},
  {'q1': ' 1562', 'count': ' 1343', 'q3': ' 1493', 'q2': ' 1481', 'name': 'data', 're': '/\x08()\x08/gi', 'y': 79, 'x': 55, 'q4': ' 1343'},
  {'q1': ' 100', 'count': ' 106', 'q3': ' 101', 'q2': ' 115', 'name': 'Box', 're': '/\x08()\x08/gi', 'y': 128, 'x': 248, 'q4': ' 106'},
  {'q1': ' 155', 'count': ' 100', 'q3': ' 83', 'q2': ' 121', 'name': 'jQuery', 're': '/\x08()\x08/gi', 'y': 277, 'x': 407, 'q4': ' 100'},
  {'q1': ' 121', 'count': ' 113', 'q3': ' 137', 'q2': ' 126', 'name': 'C', 're': '/\x08()\x08/gi', 'y': 229, 'x': 98, 'q4': ' 113'},
  {'q1': ' 329', 'count': ' 326', 'q3': ' 351', 'q2': ' 340', 'name': 'Github', 're': '/\x08()\x08/gi', 'y': 253, 'x': 352, 'q4': ' 326'},
  {'q1': ' 221', 'count': ' 120', 'q3': ' 189', 'q2': ' 232', 'name': 'Samsung', 're': '/\x08()\x08/gi', 'y': 267, 'x': 239, 'q4': ' 120'},
  {'q1': ' 622', 'count': ' 424', 'q3': ' 412', 'q2': ' 498', 'name': 'Windows', 're': '/\x08()\x08/gi', 'y': 269, 'x': 215, 'q4': ' 424'},
  {'q1': ' 225', 'count': ' 162', 'q3': ' 220', 'q2': ' 197', 'name': 'Youtube', 're': '/\x08()\x08/gi', 'y': 230, 'x': 50, 'q4': ' 162'},
  {'q1': ' 2', 'count': ' 185', 'q3': ' 0', 'q2': ' 1', 'name': '2048', 're': '/\x08()\x08/gi', 'y': 241, 'x': 150, 'q4': ' 185'},
  {'q1': ' 107', 'count': ' 81', 'q3': ' 88', 'q2': ' 116', 'name': 'NASA', 're': '/\x08()\x08/gi', 'y': 226, 'x': 502, 'q4': ' 81'},
  {'q1': ' 0', 'count': ' 86', 'q3': ' 39', 'q2': ' 0', 'name': 'Dogecoin', 're': '/\x08()\x08/gi', 'y': 259, 'x': 187, 'q4': ' 86'},
  {'q1': ' 27', 'count': ' 173', 'q3': ' 147', 'q2': ' 135', 'name': 'Docker', 're': '/\x08()\x08/gi', 'y': 202, 'x': 203, 'q4': ' 173'},
  {'q1': ' 609', 'count': ' 508', 'q3': ' 535', 'q2': ' 712', 'name': 'Microsoft', 're': '/\x08()\x08/gi', 'y': 73, 'x': 351, 'q4': ' 508'}
].map(topic);

data.topic = function(name) {
  var t = topic({name: name, re: new RegExp("\\b(" + d3.requote(name) + ")\\b", "gi"), count: 10, q1: 20, q2: 30, q3: 40, q4: 50});
  data.topics.push(t);
  return t;
};

function topic(topic) {
  topic.count = topic.count;
  topic.mentions = [];
  topic.q1 = topic.q1;
  topic.q2 = topic.q2;
  topic.q3 = topic.q3;
  topic.q4 = topic.q4;

  return topic;
}

})();

(function() {

var width = 700,
    height = 500;

var padding = 4, // collision padding
    maxRadius = 40, // collision search radius
    maxMentions = 100, // limit displayed mentions
    activeTopic; // currently-displayed topic

var r = d3.scale.sqrt()
    .domain([0, d3.max(data.topics, function(d) { return d.count; })])
    .range([0, maxRadius]);

var force = d3.layout.force()
    .gravity(0)
    .charge(0)
    .size([width, height])
    .on("tick", tick);

var node = d3.select(".g-nodes").selectAll(".g-node"),
    label = d3.select(".g-labels").selectAll(".g-label");

if ($(".g-nodes").length === 0)
  d3.select(".g-nodes").append("rect")
      .attr("class", "g-overlay")
      .attr("width", width)
      .attr("height", height)
      .on("click", clear);

d3.select(window)
    .on("hashchange", hashchange);


// bar chart

var margin = {top: 40, right: 20, bottom: 70, left: 40},
    chartWidth = 300 - margin.left - margin.right,
    chartHeight = 200 - margin.top - margin.bottom,
    barWidth = 30;

if ($(".g-bars .bar-container").length === 0){
  var bars = d3.select(".g-bars")
      .attr("width", chartWidth + margin.left + margin.right)
      .attr("height", chartHeight + margin.top + margin.bottom)
    .append("g")
      .attr("class", "bar-container")
      .attr("transform", 
            "translate(" + margin.left + "," + margin.top + ")");
}else{
  var bars = d3.select(".g-bars .bar-container");
}

if ($(".bar.q1").length === 0){
  bars.append("rect")
      .attr("class", "bar q1")
      .attr("width", barWidth)
      .attr("height", 0)
      .attr("y", 20)
      .attr("x", barWidth + 10);

  bars.append("rect")
      .attr("class", "bar q2")
      .attr("width", barWidth)
      .attr("height", 0)
      .attr("x", 2 * barWidth + 2 * 10);

  bars.append("rect")
      .attr("class", "bar q3")
      .attr("width", barWidth)
      .attr("height", 0)
      .attr("x", 3 * barWidth + 3 * 10);

  bars.append("rect")
      .attr("class", "bar q4")
      .attr("width", barWidth)
      .attr("height", 0)
      .attr("x", 4 * barWidth + 4 * 10);

  bars.append("text")
      .attr("class", "bar-legend")
    .text('Q2 \'13')
      .attr("y", chartHeight + 15)
      .attr("x", barWidth + 10);

  bars.append("text")
      .attr("class", "bar-legend")
    .text('Q3 \'13')
      .attr("y", chartHeight + 15)
      .attr("x", 2 * barWidth + 2 * 10);

  bars.append("text")
      .attr("class", "bar-legend")
    .text('Q4 \'13')
      .attr("y", chartHeight + 15)
      .attr("x", 3 * barWidth + 3 * 10);

  bars.append("text")
      .attr("class", "bar-legend")
    .text('Q1 \'14')
      .attr("y", chartHeight + 15)
      .attr("x", 4 * barWidth + 4 * 10);

  bars.append("text")
      .attr("class", "bar-label q1")
      .attr("y", chartHeight + 15)
      .attr("x", barWidth + 10);

  bars.append("text")
      .attr("class", "bar-label q2")
      .attr("y", chartHeight + 15)
      .attr("x", 2 * barWidth + 2 * 10);

  bars.append("text")
      .attr("class", "bar-label q3")
      .attr("y", chartHeight + 15)
      .attr("x", 3 * barWidth + 3 * 10);

  bars.append("text")
      .attr("class", "bar-label q4")
      .attr("y", chartHeight + 15)
      .attr("x", 4 * barWidth + 4 * 10);

  bars.append("text")
    .text("Bitcoin")
      .attr("class", "bar-label-name")
      .attr("y", chartHeight + 40)
      .attr("x", 3 * barWidth + 25);
};

updateTopics(data.topics);
hashchange();
updateActiveTopic(findTopic("Bitcoin"));


// Update the known topics.
function updateTopics(topics) {
  topics.forEach(function(d, i) { d.r = Math.max(12, r(d.count)); }); // min. collision
  force.nodes(data.topics = topics).start();
  updateNodes();
  updateLabels();
}

// Update the displayed nodes.
function updateNodes() {
  node = node.data(data.topics, function(d) { return d.name; });

  node.exit().remove();

  node.enter().append("a")
      .attr("class", "g-node")
      .attr("xlink:href", function(d) { return "#" + encodeURIComponent(d.name); })
      .call(force.drag)
      .call(linkTopic)
    .append("circle");

  node.select("circle")
      .attr("r", function(d) { return r(d.count); });
}

// Update the displayed node labels.
function updateLabels() {
  label = label.data(data.topics, function(d) { return d.name; });

  label.exit().remove();

  var labelEnter = label.enter().append("a")
      .attr("class", "g-label")
      .attr("href", function(d) { return "#" + encodeURIComponent(d.name); })
      .call(force.drag)
      .call(linkTopic);

  labelEnter.append("div")
      .attr("class", "g-name")
      .text(function(d) { return d.name; });


  label
      .style("font-size", function(d) { return Math.max(8, 1.2 * r(d.count) / 2) + "px"; })
      .style("width", function(d) { return r(d.count) * 2.5 + "px"; });

  // Create a temporary span to compute the true text width.
  label.append("span")
      .text(function(d) { return d.name; })
      .each(function(d) { d.dx = Math.max(2.5 * r(d.count), this.getBoundingClientRect().width); })
      .remove();

  label
      .style("width", function(d) { return d.dx + "px"; })
    .select(".g-value")
      .text(function(d) { return d.count + (d.r > 60 ? " mentions" : ""); });

  // Compute the height of labels when wrapped.
  label.each(function(d) { d.dy = this.getBoundingClientRect().height; });
}

// Update the active topic.
function updateActiveTopic(topic) {
  if (activeTopic = topic) {
    node.classed("g-selected", function(d) { return d === topic; });

    var max = Math.max(topic.q1, topic.q2, topic.q3, topic.q4)
    
    bars.selectAll(".bar.q1").transition().duration(300)
      .attr("height",  function() { return chartHeight * (topic.q1 / max); })
        .attr("y", function() { return chartHeight * (1 - topic.q1 / max); });
    
    bars.selectAll(".bar.q2").transition().duration(300)
      .attr("height",  function() { return chartHeight * (topic.q2 / max); })
        .attr("y", function() { return  chartHeight * (1 - topic.q2 / max); });
    
    bars.selectAll(".bar.q3").transition().duration(300)
      .attr("height",  function() { return chartHeight * (topic.q3 / max); })
        .attr("y", function() { return  chartHeight * (1 - topic.q3 / max); });
    
    bars.selectAll(".bar.q4").transition().duration(300)
      .attr("height",  function() { return chartHeight * (topic.q4 / max); })
        .attr("y", function() { return  chartHeight * (1 - topic.q4 / max); });


    bars.selectAll(".bar-label.q1").transition().duration(300).text(topic.q1)
        .attr("y", function() { return  chartHeight * (1 - topic.q1 / max) - 10; });

    bars.selectAll(".bar-label.q2").transition().duration(300).text(topic.q2)
        .attr("y", function() { return  chartHeight * (1 - topic.q2 / max) - 10; });

    bars.selectAll(".bar-label.q3").transition().duration(300).text(topic.q3)
        .attr("y", function() { return  chartHeight * (1 - topic.q3 / max) - 10; });

    bars.selectAll(".bar-label.q4").transition().duration(300).text(topic.q4)
        .attr("y", function() { return  chartHeight * (1 - topic.q4 / max) - 10; });

  bars.selectAll(".bar-label-name").text(topic.name);
    
    } else {
    node.classed("g-selected", false);
  }
}

// Assign event handlers to topic links.
function linkTopic(a) {
  a   .on("click", click)
}

// Returns the topic matching the specified name, approximately.
// If no matching topic is found, returns undefined.
function findTopic(name) {
  for (var i = 0, n = data.topics.length, t; i < n; ++i) {
    if ((t = data.topics[i]).name === name || new RegExp("^" + (t = data.topics[i]).re.source + "$", "i").test(name)) {
      return t;
    }
  }
}

// Simulate forces and update node and label positions on tick.
function tick(e) {
  node
      .each(gravity(e.alpha * .1))
      .each(collide(.5))
      .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });

  label
      .style("left", function(d) { return (d.x - d.dx / 2) + "px"; })
      .style("top", function(d) { return (d.y - d.dy / 2) + "px"; });
}

// Custom gravity to favor a non-square aspect ratio.
function gravity(alpha) {
  var cx = width / 2,
      cy = height / 2,
      ax = alpha / 4,
      ay = alpha;
  return function(d) {
    d.x += (cx - d.x) * ax;
    d.y += (cy - d.y) * ay;
  };
}

// Resolve collisions between nodes.
function collide(alpha) {
  var q = d3.geom.quadtree(data.topics);
  return function(d) {
    var r = d.r + maxRadius + padding,
        nx1 = d.x - r,
        nx2 = d.x + r,
        ny1 = d.y - r,
        ny2 = d.y + r;
    q.visit(function(quad, x1, y1, x2, y2) {
      if (quad.point && (quad.point !== d) && d.other !== quad.point && d !== quad.point.other) {
        var x = d.x - quad.point.x,
            y = d.y - quad.point.y,
            l = Math.sqrt(x * x + y * y),
            r = d.r + quad.point.r + padding;
        if (l < r) {
          l = (l - r) / l * alpha;
          d.x -= x *= l;
          d.y -= y *= l;
          quad.point.x += x;
          quad.point.y += y;
        }
      }
      return x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1;
    });
  };
}

// Fisher–Yates shuffle.
function shuffle(array) {
  var m = array.length, t, i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array;
}

// Update the active topic on hashchange, perhaps creating a new topic.
function hashchange() {
  var name = decodeURIComponent(location.hash.substring(1)).trim();
  updateActiveTopic(name && name != "!" ? findTopic(name) : null);
}

// Clear the active topic when clicking on the chart background.
function clear() {
  location.replace("#!");
}

// Rather than flood the browser history, use location.replace.
function click(d) {
  location.replace("#" + encodeURIComponent(d === activeTopic ? "!" : d.name));
  d3.event.preventDefault();
}


})();

};

var removeTopKeywords = function(){
  if ($(".g-nodes").length > 0){
    $("#g-chart").fadeOut(300);
    // $("#g-chart").hide();
    $("#g-chart").width(900);
    d3.selectAll(".g-nodes .g-node").transition().delay(300).remove();
    d3.selectAll(".g-labels .g-label").transition().delay(300).remove();
  }
};