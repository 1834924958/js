  $(function() {
				//we want 5 steps / slides for the first banner
				//let's define what happens for each one:
				
				/*
				the variable steps has the following structure:
				steps:[step1,step2,...,stepN]
				On each step/transition we define the transition for each one of the areas in the banner
				For the first banner for example, we have 3 areas, each one with a specific number
				of images (the images inside of the "ca_wrap" div). One image is shown as default, 
				which for our examples is always the first one (1). 
				So as an example, our first step/transition can be:
				[{"to" : "2"}, {"effect": "zoomOutRotated-zoomInRotated"}],
				[{"to" : "1"}, {}],
				[{"to" : "2"}, {"effect": "slideOutRight-slideInRight"}]
				This means that for the first transition, the first and third areas are going to show
				their second image, and the second area remains untouched. When we change each image we 
				apply a specific effect, which is defined in the plugin.
				*/
				$('#ca_banner1').banner({
					steps : [
						[
							//1 step:
							[{"to" : "2"}, {"effect": "zoomOutRotated-zoomInRotated"}],
							[{"to" : "2"}, {}],
							[{"to" : "2"}, {"effect": "slideOutRight-slideInRight"}]
						],
						[
							//2 step:
							[{"to" : "3"}, {"effect":"slideOutTop-slideInTop"}],
							[{"to" : "1"}, {"effect": "zoomOut-zoomIn"}],
							[{"to" : "3"}, {"effect": "slideOutRight-slideInRight"}]
						],
						[
							//3 step:
							[{"to" : "4"}, {"effect": "zoomOut-zoomIn"}],
							[{"to" : "4"}, {"effect": "slideOutRight-slideInRight"}],
							[{"to" : "4"}, {"effect": "slideOutRight-slideInRight"}]
						],
						[
							//4 step
							[{"to" : "5"}, {"effect": "slideOutBottom-slideInTop"}],
							[{"to" : "5"}, {"effect": "slideOutRight-slideInRight"}],
							[{"to" : "5"}, {"effect": "zoomOut-zoomIn"}]
						],
						[
							//5 step
							[{"to" : "1"}, {"effect": "slideOutLeft-slideInLeft"}],
							[{"to" : "1"}, {"effect": "zoomOut-zoomIn"}],
							[{"to" : "1"}, {"effect": "slideOutRight-slideInRight"}]
						]
					],
					total_steps	: 5,
					speed : 4000
				});
            });