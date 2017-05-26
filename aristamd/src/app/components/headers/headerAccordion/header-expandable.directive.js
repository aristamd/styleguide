function HeaderExpandableDirective (){
  
     return {
        restrict:'A',
        require:'^appHeaderAccordion',
        link : function(scope, element , attr , ctrl){
            element[0].firstChild.style.transition = '' + ctrl.transitionTime + 'ms all ease-out';
            // Add the delay or the time of the transition depending of the options
            ctrl.onClickAccordion = onClickAccordion;
            function onClickAccordion(event){
                if ( ctrl.time <= 1) {
                   ctrl.isExpanded = !ctrl.isExpanded;
                }
                if ( !ctrl.isExpanded  & ctrl.nudge & ctrl.time === 1) {
                /* if the state is collapsed we need to define the start height to auto to display the animation */
                element[0].firstChild.style.height = '0' ;
                element[0].firstChild.onmouseover  = function() { 
                element[0].firstChild.style.height = 'auto';
                }
                element[0].firstChild.onmouseout  = function() { 
                      element[0].firstChild.style.height = 'auto';
                }
                } else if (ctrl.isExpanded &&  ctrl.nudge && ctrl.time === 1) {
                 /*We ned to call this function after hidden div be displayed because we need the height of the
                  content to add the mouseover animation on this state;
                  */
                setTimeout(function(){ ctrl.addExpandedAnimations(); }, 100);
                 }
                ctrl.time = 0;
                ctrl.promise =0;
            }
            ctrl.addExpandedAnimations = function(){
                /*Get the height of the container to use it on the nudge animation*/
                ctrl.container = element[0].firstChild.clientHeight;
                element[0].firstChild.style.height = ''+ctrl.container+'px';
                element[0].firstChild.onmouseover  = function() { 
                element[0].firstChild.style.height = ''+(ctrl.container*0.80)+'px';
                }
                element[0].firstChild.onmouseout  = function() { 
                      element[0].firstChild.style.height = ''+ctrl.container+'px';
                }
            }

        }        
     }
   
 }


export default HeaderExpandableDirective;
