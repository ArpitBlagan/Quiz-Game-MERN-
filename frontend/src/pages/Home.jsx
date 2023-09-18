import Form from './Form'
import Text from './Text'
import Panel from './Panel'
import Cookies from 'js-cookie'
import { Link } from 'react-router-dom'
const Home = () => {
  const data= Cookies.get('admin');
  const id=Cookies.get('id');
  console.log(data,id);
  return (
    <div>
        {id?.length?<Panel/>:""}
        {data=="true"?
          <div>
            <Form/>
            <div className='underline text-center text-2xl text-blue-600'>
            <Link to="uploads">See questions that are uploaded by you</Link>
            </div>
          </div>
        :""}
        <Text/>
    </div>
  )
}

export default Home