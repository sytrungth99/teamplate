class RoutesUtils {

    static generaRouteFromConfig(configs, defaultAuth) {
      console.log("configs", configs);
      let allRouters = [];
      configs.forEach(config => {
        allRouters = [
          ...allRouters,
          ...this.setRoute(config, defaultAuth)
        ]
        console.log('day la allRouter',allRouters);
      });
      return allRouters;
    }
  
    static setRoute(config, defaultAuth) {
      let routes = [...config.routes];
      if(config.settings ) {
        routes = routes.map((route) =>{
          return {
            ...route,
            settings:config.settings,
          
          }
        })
      }
      return [...routes]
    }
  }
  
  export default RoutesUtils;