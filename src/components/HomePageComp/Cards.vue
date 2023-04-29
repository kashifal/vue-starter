<template>
  <div class="bg-gray-900 py-24 sm:py-16">
    <div class="mx-auto max-w-full px-6 text-center lg:px-8">

      <ul role="list" class="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4 lg:gap-8">
        <li v-for="person in people" :key="person.name" class="  bg-gray-800  pb-10 rounded-md overflow-hidden">
          <img class="mx-auto h-48 w-full   md:h-56 md:w-full object-cover" :src="person.imageUrl" alt="" />
          <h3 class="mt-6 text-base font-semibold leading-7 tracking-tight text-white">{{ person.title }}</h3>
          <p class="text-sm leading-6 text-gray-400">{{ person.description }}</p>
          <ul role="list" class="mt-6 flex justify-center gap-x-6">
            <li>
              <a :href="person.twitterUrl" class="text-gray-400 hover:text-gray-300">
                <span class="sr-only">Twitter</span>
                <svg class="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </li>
            <li>
              <a :href="person.linkedinUrl" class="text-gray-400 hover:text-gray-300">
                <span class="sr-only">LinkedIn</span>
                <svg class="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd" />
                </svg>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
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