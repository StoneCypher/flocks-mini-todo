
var TempData = {

    lastChecked: undefined,

    todoList: [

      { item: 'Get milk' },
      { item: 'Homework',     priority: 5, due: new Date().getTime() + 3*24*60*60*1000 },
      { item: 'Net homework', priority: 2, due: new Date().getTime() + 3*24*60*60*1000 },
      { item: 'End homework', priority: 5, due: new Date().getTime() + 6.332*24*60*60*1000 },
      { item: 'Old homework', priority: 5, due: new Date().getTime() - 3*24*60*60*1000 },
      { item: 'Fix server',   priority: 9 },
      { item: 'Check alarm',  priority: 3 },
      { item: 'Read Candide'  },
      { item: 'Get coffee',   priority: 8, due: new Date().getTime() + 4*60*60*1000 },

      { item: 'Fin homework', priority: 4, due: new Date().getTime() + 6.332*24*60*60*1000, done: true }

    ]

};
