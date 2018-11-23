export default {
  path:'/',
  children: [
    {
      path: '/',
      action() {
        return {
          title: 'home',
          event: 'go_home'
        }
      },
    },
    {
      path:'/login',
      action() {
        return {
          title: 'login',
          event: 'select_login',
        }
      }
    },
    {
      path:'/posts',
      children:[
        {
          path:'',
          action() {
            return {
              title: 'posts',
              event: 'select_posts',
            }
          },
        },
        {
          path:'/:id',
          action({params}) {
            return {
              title: 'need post title?!',
              event: 'view_post',
              detail: {postId: params.id}
            }
          }
        }
      ]
    },
    {
      path:'/create',
      children: [
        {
          path:'',
          action() {
            return {
              title:'create post',
              event: 'create_post'
            }
          }
        }
      ]
    },
  ],
};
