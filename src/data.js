const now = new Date();
const posts = [
  {
    id:'3',
    author: 'admin',
    date: new Date(now.setDate(now.getDate() - 1)),
    title: 'A title!',
    content: `blah blah generate this with lorem.`
  },
  {
    id:'2',
    author: 'admin',
    date: new Date(now.setDate(now.getDate() - 11)),
    title: 'Another title!',
    content: `blah blah generate this with lorem.`
  },
  {
    id:'1',
    author: 'admin',
    date: new Date(now.setDate(now.getDate() - 45)),
    title: 'My first post ever!',
    content: `blah blah generate this with lorem.`
  }
];
export default posts;
