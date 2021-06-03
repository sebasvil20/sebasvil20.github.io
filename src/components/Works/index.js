import React from 'react'
import { WorkCard } from '../WorkCard'
import { Container, Span, CardsContainer } from './styles'
export const Works = () => {
  const arrProject = [
    {
      title: 'Hinvlogging',
      description:
        'My personal blog, where I talk about programming, tutorials, lifestyle or just stories, I love writing and teaching.',
      link: 'https://hinvloggin.vercel.app/',
      image: 'https://i.ibb.co/Ld6XLmm/hinvlogging.png',
    },
    {
      title: 'GitHub Jobs',
      description:
        "Do you think GitHub Jobs should have a better UI/UX? Me too. That's why I developed this page.",
      link: 'https://github-jobs-iota-three.vercel.app/',
      image: 'https://i.ibb.co/47zRSMD/githubjobs.png',
    },
    {
      title: "Petgram - Pet's Instagram",
      description:
        'Do you want to see photos of your favorite pets? Try Petgram now! Save your favorites or just browse by categories.',
      link: 'https://petgram-sebasvil20.vercel.app/',
      image: 'https://i.ibb.co/SJ9Sps7/petgram.png',
    },
    {
      title: 'K/DA Music player',
      description: "A K/DA music player, that's all, I LOVE K/DA!",
      link: 'https://sebasvil20.github.io/kda-music-player/',
      image: 'https://i.ibb.co/DMg0L05/kda-music-player-UI.png',
    },
    {
      title: 'Angel\' Store',
      description: "An ecommerce for lingerie",
      link: 'https://creacionyconfeccionangels.com/',
      image: 'https://i.ibb.co/7v3kMxx/creacionyconfeccionangels.png',
    },
    {
      title: 'MERNTasks app',
      description:
        'Project and task tracking app made with the MERN stack. You can login, registration, create your own projects and more.',
      link: 'https://merntasks-app-client-side.netlify.app/',
      image: 'https://i.ibb.co/1MnVLFf/image-6.jpg',
    },
    {
      title: 'IP Address tracker',
      description:
        "A simple IP address tracker, it will display some data about your IP and the position in the map",
      link: 'https://ip-tracker-tan.vercel.app/',
      image: 'https://i.ibb.co/cYhxwWb/iptracker.png',
    },
    {
      title: 'Song lyrics And Artist Info',
      description:
        'Consuming two APIs at the same time, the app is able to show you the lyrics of the song you are looking for, and adds information about the artist such as the photo and biography.',
      link: 'https://eloquent-mestorf-eb5fce.netlify.app/',
      image: 'https://i.ibb.co/NxS9qMY/image-8.jpg',
    },
    {
      title: 'Days',
      description:
        'Practice of BarbaJs and GSAP to make page transitions and interactive designs.',
      link: 'https://sebasvil20.github.io/days-web-practice/',
      image: 'https://i.ibb.co/9rcr9TB/days.png',
    },
  ]

  return (
    <Container id='portfolio'>
      <Span>Cool projects</Span>
      <CardsContainer>
        {arrProject.map((project) => (
          <WorkCard key={project.title} {...project} />
        ))}
      </CardsContainer>
    </Container>
  )
}
