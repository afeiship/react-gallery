import './dev.scss';
import ReactGallery from './main';

/*===example start===*/

// install: npm install afeiship/react-gallery --save
// import : import ReactGallery from 'react-gallery'

// original

class App extends React.Component{
  state = {
    items:[
      {
        src: 'https://d33wubrfki0l68.cloudfront.net/0ca2cd8674ea552c7555ffa2f48e94334d564106/165a7/images/image-3.jpg',
        title: 'test0'
      },
      {
        src: 'http://imgcdn.ph.126.net/UZkXTzO-A7jPMNzqA9ZAzA==/6632491633259813254.jpg',
        title: 'test1'
      },
      {
        src: 'https://d33wubrfki0l68.cloudfront.net/b49a83ba35a6180bc79a3dab202f8178b8e546b6/bbff6/images/image-7.jpg',
        title: 'test2'
      },
      {
        src: 'https://d33wubrfki0l68.cloudfront.net/1097c4dff0eaf54a26bdbbc20628c201de108a16/02a08/images/image-5.jpg',
        title: 'test3'
      },
      {
        src: 'https://d33wubrfki0l68.cloudfront.net/28e392e11daadef180e12e890014c81dec12bd0c/e5350/images/image-4.jpg',
        title: 'test3'
      }
    ]
  };

  constructor(props){
    super(props);
    window.demo = this;
    window.refs = this.refs;
    window.rc = this.refs.rc;
    window.gg = ReactGallery;
  }

  _onChange = e =>{
    console.log('currentIndex:',e.target.value);
  };

  render(){
    const { items } = this.state;
    return (
      <div className="hello-react-gallery">
        <ReactGallery ref='rc'
            items={items}
            value={2}
            onChange={this._onChange} />
      </div>
    );
  }
}
/*===example end===*/

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
