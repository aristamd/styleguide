function HeaderExpandableDirective (){
  
     return {
        restrict:'A',
        require:'^appHeaderAccordion',
        link : function(scope, element , attr , ctrl){
            element[0].firstChild.style.transition = '' + ctrl.transitionTime + 'ms all ease-in-out';
            // Add the delay or the time of the transition depending of the options
            ctrl.onClickAccordion = onClickAccordion;
            ctrl.isFirstTime = true;
            element[0].firstChild.style.height = '20px';

            function onClickAccordion(event){
              if ( ctrl.time <= 1) {
                ctrl.isExpanded = !ctrl.isExpanded;
               
              }
              if ( !ctrl.isExpanded  & ctrl.nudge & ctrl.time === 1) {
               /* if the state is collapsed we need to define the start height to auto to display the animation */
               var elemt = angular.element(element[0].getElementsByClassName('expandcollapse-heading-expanded'));  
                elemt.on('mouseover', function() {
                elemt.css({'height': '20px','padding-bottom':'30px'});
                      });
                elemt.on('mouseout', function() {
                elemt.css({'height':'20px','padding-bottom':'0px'});
                      });
              } else if (ctrl.isExpanded &&  ctrl.nudge && ctrl.time === 1) {
               /*We ned to call this function after hidden div be displayed because we need the height of the
                content to add the mouseover animation on this state;
                */
                var timer = setTimeout(function(){ ctrl.addExpandedAnimations(); }, 100);
              }
              ctrl.time = 0;
              ctrl.promise =0;
            }
            ctrl.addExpandedAnimations = function(){
              var hiddenContainer = angular.element(element[0].getElementsByClassName('animate-show-hide'))[0].clientHeight + 20;
              ctrl.expandedContainer = ctrl.isFirstTime ? (element[0].firstChild.clientHeight + hiddenContainer) : ctrl.expandedContainer; 
              ctrl.isFirstTime = false;
               /*Get the height of the container to use it on the nudge animation*/
                 element[0].firstChild.style.height = ''+ ctrl.expandedContainer+'px';
                 var elemt = angular.element(element[0].getElementsByClassName('expandcollapse-heading-expanded'));
                 elemt.on('mouseover', function() {
                 elemt.css({'height': (ctrl.expandedContainer*0.95)+'px','padding-bottom':'0px'});
                      });
                   elemt.on('mouseout', function() {
                 elemt.css({'height': ctrl.expandedContainer+'px','padding-bottom':'20px'});
                      });
            }
        }        
     }
   
 }


export default HeaderExpandableDirective;
