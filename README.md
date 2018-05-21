# react-gallery
> Gallery for react

## properties:
```javascript

  static propTypes = {
    className: PropTypes.string,
    items: PropTypes.array,
    value: PropTypes.number,
    onChange: PropTypes.func,
    zoom: PropTypes.number,
    template: PropTypes.func,
    header: PropTypes.func,
    footer: PropTypes.func,
    extra: PropTypes.func,
  };

  static defaultProps = {
    items: [],
    value: 0,
    onChange: noop,
    zoom: 1.8,
    template: noop,
    header: noop,
    footer: noop,
    extra: noop,
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

// original

class App extends React.Component{
  state = {
    items:[
      {
        src: 'https://gw.alicdn.com/tfs/TB18BqkrKOSBuNjy0FdXXbDnVXa-1920-560.jpg',
        title: 'test0'
      },
      {
        src: 'http://imgcdn.ph.126.net/UZkXTzO-A7jPMNzqA9ZAzA==/6632491633259813254.jpg',
        title: 'test1'
      },
      {
        src: 'https://gdp.alicdn.com/imgextra/i2/157935207/TB2j6bBq1OSBuNjy0FdXXbDnVXa_!!157935207.jpg',
        title: 'test2'
      },
      {
        src: 'https://img.alicdn.com/tps/i4/TB1NNBJqx9YBuNjy0FfSutIsVXa.jpg_1080x1800Q60s50.jpg',
        title: 'test3'
      },
      {
        src: 'https://img.alicdn.com/imgextra/i3/3305364521/TB2QOJBqStYBeNjSspkXXbU8VXa_!!3305364521.jpg',
        title: 'test3'
      }
    ],
    hardItems: [
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
    const { items, hardItems } = this.state;
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

```

## resouces:
+ https://sachinchoolur.github.io/lightgallery.js/#lg=1&slide=2
+ https://desmonding.me/zooming/
+ https://medium-zoom.francoischalifour.com/
+ https://jsfiddle.net/pow4ngbw/70/


## todos:
+ [ ] lazy loading
