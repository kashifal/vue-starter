<template>
  <router-link to="/podcast" class="bg-gray-900 py-24 sm:py-16">
    <div class="mx-auto max-w-full px-6 text-center lg:px-8">

      <ul role="list" class="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4 lg:gap-8">
        <li v-for="person in people" :key="person.name" class="  bg-gray-800  pb-10 rounded-md overflow-hidden">
          <div class="relative">
            <img class="mx-auto h-48 w-full md:h-56 md:w-full object-cover" :src="person.imageUrl" alt="" />
            <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-20 h-20">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
            </svg>

            </div>
          </div>

          <h3 class="mt-6 text-base font-semibold leading-7 tracking-tight text-white">{{ person.title }}</h3>
          <p class="text-sm leading-6 text-gray-400">{{ person.description }}</p>
          <ul role="list" class="mt-6 flex justify-center gap-x-6 text-white">
          Play
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
            </svg>
            

          </ul>
        </li>
      </ul>
    </div>
  </router-link>
</template>

<script setup>
 



const people = [
  {
    title: 'The Creative Spark',
    description: 'Join us as we explore the world of art and design, featuring interviews with top creatives and in-depth discussions about the latest trends and techniques.',
    imageUrl: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    title: 'The Mindful Minute',
    description: 'Take a break from your hectic day and join us for a moment of mindfulness. Our experts share tips and techniques for reducing stress and finding inner peace.',
    imageUrl: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    title: 'The Health Hub',
    description: 'Get the latest insights and advice on staying healthy and active, with expert guests covering everything from nutrition and exercise to mental health and wellness.',
    imageUrl:  'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    title: 'The Startup Journey',
    description: 'Join us as we follow the journeys of successful startup founders, with in-depth interviews and insights into the challenges and opportunities of starting a business.',
    imageUrl:  'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    title: 'The Science Hour',
    description: 'Explore the frontiers of science with our expert guests, as we delve into the latest breakthroughs and discoveries in fields like physics, biology, and astronomy.',
    imageUrl:  'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    title: 'The Politics Show',
    description: 'Stay up to date on the latest political news and analysis, with in-depth coverage of elections, policy debates, and current events from around the world.',
    imageUrl:  'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    title: 'The Travel Diaries',
    description: 'Take a journey around the world with our expert travelers, as we explore the most fascinating destinations and hidden gems from every corner of the globe.',
    imageUrl:  'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    twitterUrl: '#',
    linkedinUrl: '#'
  }
]
</script>