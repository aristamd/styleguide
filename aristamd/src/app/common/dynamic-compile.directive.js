function dynamicDirective ($compile){
     return {
        restrict:'A',
        link : function(scope, element , attrs){
          scope.$watch(attrs.appDynamic, function(html) {
            element.html(html);
            $compile(element.contents())(scope);
          });
        }
     }
 }
export default dynamicDirective;
