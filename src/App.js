import './App.css';
import { ChatEngine} from 'react-chat-engine'
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm'


function App() {

  if(!localStorage.getItem('username')) return<LoginForm/>
  
  return (
    <div className="App">
      <ChatEngine
        height="100vh"
        projectID='af653380-f194-4103-979e-7050c4e7b8eb'
        userName='John'
        userSecret='qwerty'
        renderChatFeed = {(chatAppProps) =><ChatFeed {...chatAppProps}
        onNewMessage = {()=> new Audio('https://chat-engine-assets.s3.amazonaw.com/click.mp3').play}
        
        />}
      />
    </div>
  );
}

export default App;
