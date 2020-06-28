import React from 'react';
import Container from '@material-ui/core/Container';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import Grid from '@material-ui/core/Grid';
import FeaturedPost from './FeaturedPost';
import ControlImage from '../static/contservi.png';
import DesincorpImage from '../static/desincorp.png';


const sections = [
    { title: 'Technology', url: '#' },
    { title: 'Design', url: '#' },
    { title: 'Culture', url: '#' },
    { title: 'Business', url: '#' },
    { title: 'Politics', url: '#' },
    { title: 'Opinion', url: '#' },
    { title: 'Science', url: '#' },
    { title: 'Health', url: '#' },
    { title: 'Style', url: '#' },
    { title: 'Travel', url: '#' },
  ];

const featuredPosts = [
  {
    title: 'Desincorporaciones e Incorporaciones',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: DesincorpImage,
    imageText: 'Image Text',
  },
  {
    title: 'Control de Servicios',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: ControlImage,
    imageText: 'Image Text',
  },
];


const mainFeaturedPost = {
  title: 'Gestión de operaciones',
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: 'https://tvazteca.brightspotcdn.com/dims4/default/6709740/2147483647/strip/true/crop/1200x800+0+0/resize/968x645!/format/jpg/quality/80/?url=https%3A%2F%2Ftvazteca.brightspotcdn.com%2F0d%2F28%2Fa5ba1c7b46be8ada90b5d3ab2880%2Fmetrobus.jpg',
  imgText: 'main image description',  
};

const Menu = () =>{
    return (
        <Container maxWidth="lg">
            <Header title="Metrobús" sections={sections} />
            <main>
                <MainFeaturedPost post={mainFeaturedPost} />
                <Grid container spacing={4}>
             {featuredPosts.map((post) => (
               <FeaturedPost key={post.title} post={post} />
              ))}           
            </Grid>
            </main>
        </Container>
    )
}


export default Menu;