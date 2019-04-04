(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports=a(28)},16:function(e,t,a){},17:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(9),l=a.n(i),s=(a(16),a(10)),c=a(1),o=a(2),m=a(4),u=a(3),p=a(5),d=(a(17),function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{onClick:function(){return e.props.handler(e.props.filter)}},r.a.createElement("div",{className:"options"},this.props.filter))}}]),t}(n.Component)),h=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"film",onClick:function(){return e.props.detailsHandle(e.props.film)}},r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w200/"+this.props.film.poster_path,alt:""}),r.a.createElement("p",null,this.props.film.title))}}]),t}(n.Component),f=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.props.row.map(function(t,a){if(void 0!==t)return r.a.createElement(h,{film:t,key:a,detailsHandle:e.props.detailsHandle})});return r.a.createElement("div",{className:"row"},t)}}]),t}(n.Component),v=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={link:""},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t="https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&order=relevance&q=".concat(this.props.filmTitle,"+disney+trailer&key=").concat("AIzaSyCrd3PrjkScRG1BJ_a4G6Qyy0U43ngfQpk"),a="";return fetch(t).then(function(t){t.json().then(function(t){a=t.items[0].id.videoId,e.setState({link:"https://www.youtube.com/embed/".concat(a)})})}),r.a.createElement("div",{className:"player"},r.a.createElement("iframe",{width:"560",height:"315",src:this.state.link,frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}))}}]),t}(n.Component),b=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={id:0},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t="https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/album?q=".concat(this.props.filmTitle.trim(),"-original-soundtrack"),a=0;return fetch(t).then(function(t){t.json().then(function(t){void 0!==t.data[0]&&(a=t.data[0].id,fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/".concat(a)).then(function(t){t.json().then(function(t){e.setState({id:a})})}))})}),r.a.createElement("div",{className:"tracks"},r.a.createElement("iframe",{scrolling:"no",frameBorder:"0",allowtransparency:"true",src:"https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=700&height=350&color=ff0000&layout=dark&size=medium&type=album&id="+this.state.id+"&app_id=340402",width:"700",height:"350"}))}}]),t}(n.Component),g=(a(18),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={info:[],trailer:[],album:[],page:""},a.handleInfoClick=function(){var e=r.a.createElement("div",{className:"float-right"},r.a.createElement("div",{className:"date"},"Release Date:")," ",r.a.createElement("div",null,a.props.film.release_date),r.a.createElement("br",null),r.a.createElement("div",{className:"overview"},"Overview:")," ",r.a.createElement("div",null,a.props.film.overview));a.setState({page:"info",info:e})},a.handleTrailerClick=function(){var e=r.a.createElement("div",{className:"video"},r.a.createElement("br",null),r.a.createElement(v,{filmTitle:a.props.film.title}));a.setState({page:"trailer",trailer:e})},a.handleAlbumClick=function(){var e=r.a.createElement("div",{className:"Album"},r.a.createElement("br",null),r.a.createElement(b,{filmTitle:a.props.film.title}));a.setState({page:"album",album:e})},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t="https://image.tmdb.org/t/p/w500/"+this.props.film.backdrop_path,a=this.state.info,n=this.state.trailer,i=this.state.album,l="info"===this.state.page?" is-active":" inactive",s="trailer"===this.state.page?" is-active":" inactive",c="album"===this.state.page?" is-active":" inactive";return r.a.createElement("div",{className:"detailsCard"},r.a.createElement("div",{className:"detailsheader",style:{backgroundImage:"url(".concat(t,")")}},this.props.film.title),r.a.createElement("div",{className:"details-options"},r.a.createElement("div",{filter:"Info",onClick:function(){return e.handleInfoClick()}},"Info"),r.a.createElement("div",{filter:"Trailer",onClick:function(){return e.handleTrailerClick()}},"Trailer"),r.a.createElement("div",{filter:"Album",onClick:function(){return e.handleAlbumClick()}},"Albums"),r.a.createElement("div",{className:"Add-fav",onClick:function(){return e.props.handler(e.props.film)}},r.a.createElement("img",{src:"https://cdn1.iconfinder.com/data/icons/web-page-and-iternet/90/Web_page_and_internet_icons-06-512.png",alt:""}))),r.a.createElement("div",{className:"info"+l},a),r.a.createElement("div",{className:"trailer"+s},n),r.a.createElement("div",{className:"deatilsalbum"+c},i))}}]),t}(n.Component)),E=["51005402","12709110","10495744","6436877","473879","13632628","8883277","12384190","2310491","679901","473893","12626032","6470685","68849201","65497782","14582002","74437962","6436884","11139100","7113713","78387102","301061","301057","6436833","13366813","42887881","11747556","13632934","302639","50613492","12607688","1125239","7972382","931414","91335652","306942","10889268","6873815","302534","1343133","301038","306943","300809","9688328","430119","940065","4606301","301122"],y=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={title:"",cover:"",album:{}},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log("in album"),fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/".concat(this.props.id)).then(function(t){t.json().then(function(t){e.setState({title:t.title,cover:t.cover_medium,album:t})})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"album",onClick:function(){return e.props.handler(e.state.album)}},r.a.createElement("img",{src:this.state.cover,alt:""}),r.a.createElement("p",null,this.state.title))}}]),t}(n.Component),k=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.props.row.map(function(t,a){return r.a.createElement(y,{id:t,key:a,handler:e.props.handler})});return r.a.createElement("div",{className:"album-row"},t)}}]),t}(n.Component),w=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"album-details"},r.a.createElement("div",{className:"float-left"},r.a.createElement("img",{src:this.props.album.cover_big,alt:""})),r.a.createElement("div",{className:"float-right"},r.a.createElement("h2",{className:"title"},this.props.album.title),r.a.createElement("div",{className:"Add-fav",onClick:function(){return e.props.handler(e.props.album)}},r.a.createElement("img",{src:"https://cdn1.iconfinder.com/data/icons/web-page-and-iternet/90/Web_page_and_internet_icons-06-512.png",alt:""})),r.a.createElement("br",null),r.a.createElement("iframe",{scrolling:"no",frameBorder:"0",allowtransparency:"true",src:"https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=700&height=350&color=ff0000&layout=dark&size=medium&type=album&id="+this.props.album.id+"&app_id=340402",width:"700",height:"350"},"Songs")),r.a.createElement("div",{className:"clear"}))}}]),t}(n.Component),_=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"album",onClick:function(){return e.props.handler(e.props.album)}},r.a.createElement("img",{src:this.props.album.cover_medium,alt:""}),r.a.createElement("p",null,this.props.album.title))}}]),t}(n.Component),j=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.props.row.map(function(t,a){if(void 0!==t)return r.a.createElement(_,{album:t,key:a,handler:e.props.handler})});return r.a.createElement("div",{className:"row"},t)}}]),t}(n.Component),O=(a(25),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).handleFilterClick=function(e){if("movies"===a.state.category){for(var t=[],n=0;n<a.state.films.length;n+=3)for(var i=0;i<a.state.films[n].props.row.length;i++)t.push(a.state.films[n].props.row[i]);if("All"===e){var l=t.map(function(e,n){if(n%3===0){for(var i=[],l=n;l<n+3;l++)i.push(t[l]);return r.a.createElement(f,{row:i,key:n,detailsHandle:a.handleDetailsClick})}});a.setState({filteredFilms:l})}else if("A-Z"===e){var s=t.map(function(e){return e.title});s.sort();for(var c=[],o=0;o<s.length;o++)for(var m=0;m<t.length;m++)s[o]===t[m].title&&c.push(t[m]);var u=c.map(function(e,t){if(t%3===0){for(var n=[],i=t;i<t+3;i++)n.push(c[i]);return r.a.createElement(f,{row:n,key:t,detailsHandle:a.handleDetailsClick})}});a.setState({filteredFilms:u})}else if("Release Date"===e){var p=t.map(function(e){return e.release_date});p.sort();for(c=[],o=0;o<p.length;o++)for(m=0;m<t.length;m++)p[o]===t[m].release_date&&c.push(t[m]);var d=c.map(function(e,t){if(t%3===0){for(var n=[],i=t;i<t+3;i++)n.push(c[i]);return r.a.createElement(f,{row:n,key:t,detailsHandle:a.handleDetailsClick})}});a.setState({filteredFilms:d})}}else if("songs"===a.state.category)if("All"===e){var h=a.state.albums.map(function(e,t){if(t%3===0){for(var n=[],i=t;i<t+3;i++)n.push(a.state.albums[i]);return r.a.createElement(j,{row:n,key:t,handler:a.handleAlbumClick})}});a.setState({filteredFilms:h})}else if("A-Z"===e){console.log("in az"),console.log(a.state.albums);var v=a.state.albums.map(function(e){return e.title});v.sort();var b=[];for(o=0;o<v.length;o++)for(m=0;m<a.state.albums.length;m++)v[o]===a.state.albums[m].title&&b.push(a.state.albums[m]);var g=b.map(function(e,t){if(t%3===0){for(var n=[],i=t;i<t+3;i++)n.push(b[i]);return r.a.createElement(j,{row:n,key:t,handler:a.handleAlbumClick})}});a.setState({filteredFilms:g})}else if("Release Date"===e){var E=a.state.albums.map(function(e){return e.release_date});E.sort();for(b=[],o=0;o<E.length;o++)for(m=0;m<a.state.albums.length;m++)E[o]===a.state.albums[m].release_date&&b.push(a.state.albums[m]);var y=b.map(function(e,t){if(t%3===0){for(var n=[],i=t;i<t+3;i++)n.push(b[i]);return r.a.createElement(j,{row:n,key:t,handler:a.handleAlbumClick})}});a.setState({filteredFilms:y})}a.setState({page:e,details:[]})},a.handleDetailsClick=function(e){a.setState({category:"movies",page:"details"}),a.setState({details:[]});var t=r.a.createElement(g,{film:e,handler:a.addToFav,detailsHandler:a.handleFilterClick});a.setState({details:t})},a.handleAlbumClick=function(e){a.setState({category:"songs",page:"details"}),a.setState({details:[]});var t=r.a.createElement(w,{album:e,handler:a.addToFav});a.setState({details:t})},a.getFilms=function(){fetch("https://cors-anywhere.herokuapp.com/https://api.themoviedb.org/3/list/108712?api_key=47e2a8458de32a33b1c2de69766fb6f2&language=en-US").then(function(e){e.json().then(function(e){var t=e.items.map(function(t,n){if(n%3===0){for(var i=[],l=n;l<n+3;l++)i.push(e.items[l]);return r.a.createElement(f,{row:i,key:n,detailsHandle:a.handleDetailsClick})}});a.setState({films:t})})}),a.setState({category:"movies",page:""})},a.getSongs=function(){var e=E.map(function(e,t){if(t%3===0){for(var n=[],i=t;i<t+3;i++)n.push(E[i]);return r.a.createElement(k,{row:n,key:t,handler:a.handleAlbumClick})}});a.setState({songs:e}),a.setState({category:"songs",page:""})},a.addToFav=function(e){var t=Object(s.a)({},a.state);t.favs.push(e),a.setState(t)},a.showFavorites=function(){if(a.setState({filteredFilms:[],category:"favs"}),0===a.state.favs.length){var e=[r.a.createElement("div",{style:{color:"white"}},"no favorites added yet")];a.setState({displayedFavs:e})}else{var t=a.state.favs.map(function(e){return"album"===e.type?r.a.createElement("div",{className:"album",onClick:function(){return a.handleAlbumClick(e)}},r.a.createElement("img",{src:e.cover_medium,alt:""}),r.a.createElement("p",null,e.title),r.a.createElement("p",null,"________________________"),r.a.createElement("br",null)):r.a.createElement("div",{className:"film",onClick:function(){return a.handleDetailsClick(e)}},r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w200/"+e.poster_path,alt:""}),r.a.createElement("p",null,e.title),r.a.createElement("p",null,"________________________"),r.a.createElement("br",null))});a.setState({displayedFavs:t})}},a.showHome=function(){a.setState({category:"",page:"",details:[]})},a.state={films:[],filteredFilms:[],page:"",details:[],songs:[],albums:[],category:"",filteredAlbums:[],favs:[],displayedFavs:[]},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=[];E.forEach(function(a){fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/".concat(a)).then(function(a){a.json().then(function(a){t.push(a),e.setState({albums:t})})})})}},{key:"render",value:function(){var e=this,t="All"===this.state.page?" is-active":" inactive",a="A-Z"===this.state.page?" is-active":" inactive",n="Release Date"===this.state.page?" is-active":" inactive",i="movies"===this.state.category&&""===this.state.page?" is-active":" inactive",l="songs"===this.state.category&&""===this.state.page?" is-active":" inactive",s="favs"===this.state.category?" is-active":" inactive",c="details"===this.state.page?" inactive":"",o="details"!==this.state.page?" inactive":"",m="favs"===this.state.category?" inactive":" is-active",u=""===this.state.category||"details"===this.state.page?" inactive":"",p=this.state.details,h=this.state.filteredFilms,f=this.state.displayedFavs;return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"main"+c},r.a.createElement("div",{className:"header"},"Disney Hub"),r.a.createElement("div",{className:"categories"},r.a.createElement("div",{className:"float-left"},r.a.createElement("p",{className:"options",onClick:function(){return e.getFilms()}},"Movies"),r.a.createElement("p",{className:"options",onClick:function(){return e.getSongs()}},"Songs"),r.a.createElement("p",{className:"options",onClick:function(){return e.showFavorites()}},"Favs")))),r.a.createElement("div",{className:"navbar"+o},r.a.createElement("img",{src:"https://cdn2.iconfinder.com/data/icons/basic-4/512/home-512.png",alt:"",onClick:function(){return e.showHome()}}),r.a.createElement("img",{src:"https://i.pinimg.com/originals/3d/65/db/3d65dbcecc72931a3b7a45a70d291892.png",alt:"",onClick:function(){return e.showFavorites()}})),r.a.createElement("div",{className:"filters"+u},r.a.createElement(d,{filter:"All",handler:this.handleFilterClick}),r.a.createElement(d,{filter:"A-Z",handler:this.handleFilterClick}),r.a.createElement(d,{filter:"Release Date",handler:this.handleFilterClick})),r.a.createElement("div",{className:i},this.state.films),r.a.createElement("div",{className:l},this.state.songs),r.a.createElement("div",{className:"list"+t+a+n},h),r.a.createElement("div",{className:"favs"+s},f),r.a.createElement("div",{className:"details"+m},p))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[11,1,2]]]);
//# sourceMappingURL=main.5495e04e.chunk.js.map