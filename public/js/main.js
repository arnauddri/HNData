d3.select("#slides")
	.selectAll(".next")
		.select("a")
			.on("click",function(d,i){
				d3.event.preventDefault();
				
				d3.select("#slides #p"+i)
					.classed("active",false)

				d3.select("#slides").classed("last",i==4)

			});

d3.select("#slides")
	.selectAll(".previous")
		.select("a")
			.on("click",function(d,i){
				d3.event.preventDefault();
				
				d3.select("#slides #p"+i)
					.classed("active",true)

				d3.select("#slides").classed("last",i==4)

			});
