# react-gallery
> Gallery for react

## properties:
```javascript

  static propTypes = {
    className: PropTypes.string,
    value: PropTypes.array,
    onChange: PropTypes.func
  };

  static defaultProps = {
    value: [],
    onChange: noop
  };
  
```

## install && import:
```bash
npm install --save afeiship/react-gallery --registry=https://registry.npm.taobao.org
```

```js
import ReactGallery from 'react-gallery';
```

```scss
// customize your styles:
$react-gallery-options:(
);

@import 'node_modules/react-gallery/dist/style.scss';
```


## usage:
```jsx

// install: npm install afeiship/react-gallery --save
// import : import ReactGallery from 'react-gallery'

class App extends React.Component{
  state = {
    items:[
      {
        src: 'http://placeholder.qiniudn.com/120x180',
        original: 'http://placeholder.qiniudn.com/1200x1800',
        title: 'test1'
      },
      {
        src: 'http://placeholder.qiniudn.com/800x1800',
        original: 'http://placeholder.qiniudn.com/8000x18000',
        title: 'test2'
      },
      {
        src: 'http://placeholder.qiniudn.com/300x400',
        original: 'http://placeholder.qiniudn.com/3000x4000',
        title: 'test3'
      },
      {
        src: 'http://placeholder.qiniudn.com/1000x200',
        original: 'http://placeholder.qiniudn.com/10000x2000',
        title: 'test3'
      }
    ]
  };

  constructor(props){
    super(props);
    window.demo = this;
    window.refs = this.refs;
    window.rc = this.refs.rc;
  }

  render(){
    const { items } = this.state;
    return (
      <div className="hello-react-gallery">
        <ReactGallery ref='rc' value={items} />
      </div>
    );
  }
}

```

## resouces:
+ https://sachinchoolur.github.io/lightgallery.js/#lg=1&slide=2
