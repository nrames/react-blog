const blogs = ( state = [], action ) => {
  switch(action.type) {
    case 'BLOGS':
      return action.blogs
    case 'ADD_BLOG':
      return [...state, action.blog];
    case 'DELETE_POST':
      let blogs = state.filter( p => p.id !== action.id)
      return blogs
    default:
      return state
  }
}

export default blogs;
