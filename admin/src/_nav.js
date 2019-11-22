export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'info',
        text: 'NEW',
      },
    },
    {
      title: true,
      name: 'Managements',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'Articles',
      url: '/articles',
      icon: 'icon-pencil',
    },
    {
      name: 'Transactions',
      url: '/transactions',
      icon: 'icon-pie-chart',
    },
    {
      name: 'Users',
      url: '/users',
      icon: 'icon-user',
    },
    {
      name: 'Vouchers',
      url: '/vouchers',
      icon: 'icon-puzzle',
    }
  ],
};
