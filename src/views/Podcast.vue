<template>
  <div class="mx-auto max-w-full relative  px-4 sm:px-6 lg:px-8 ">
  <div class="mx-auto max-w-full px-4 sm:px-6 lg:px-8 md:py-4 py-8 ">
      <Tabs /> 
      </div>
    <div class="grid grid-cols-1 pb-8 lg:grid-cols-2 gap-8 relative">
    <div class="flex-1 p:2 sm:px-0  flex flex-col  ">
    <Video />
    <h1 class="text-white my-8 text-xl font-semibold tracking-wide">01 : Stream : <span class="underline ">Benefits Of Programming Job</span> </h1>

    <div class="py-0 w-full flex items-center flex-wrap gap-2">
        <div class="px-3 py-1 rounded-full bg-gray-50"><span class="text-xs">#programming</span></div>
        <div class="px-3 py-1 rounded-full bg-gray-50"><span class="text-xs">#code</span></div>
        <div class="px-3 py-1 rounded-full bg-gray-50"><span class="text-xs">#design</span></div>
        <div class="px-3 py-1 rounded-full bg-gray-50"><span class="text-xs">#it</span></div>
    </div>
    </div>
   <!-- component -->
<div class="flex-1 p:2 sm:px-6 justify-between  flex flex-col h-[90vh] sticky top-0">
   <div class="flex sm:items-center justify-between  py-3 -b -gray-200">
      <div class="relative flex items-center space-x-4">
         <div class="relative">
           
         <img src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="" class="w-8 sm:w-10 h-8 sm:h-10 rounded-full">
         </div>
         <div class="flex flex-col leading-tight pl-4">
            <div class="text-md mt-1 flex items-center">
               <span class="text-white mr-3">Chat with Podcaster</span>
            </div>
            <div class="flex items-center gap-x-2">
            <div class="h-2 w-2 bg-green-600 rounded-full"></div>
            <span class="text-sm text-green-400">#podcastOne</span>
            </div>
         </div>
      </div>
     
   </div>
   <div id="messages" class="flex flex-col  space-y-4 p-3 overflow-y-auto ">
      <div class="chat-message">
         <div class="flex items-end">
            <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
               <div><span class="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-100 text-gray-600">Can be verified on any platform using docker</span></div>
            </div>
            <img src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="My profile" class="w-6 h-6 rounded-full order-1">
         </div>
      </div>
      <div class="chat-message">
         <div class="flex items-end justify-end">
            <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
               <div><span class="px-4 py-2 rounded-lg inline-block rounded-br-none bg-indigo-600 text-white ">Your error message says permission denied, npm global installs must be given root privileges.</span></div>
            </div>
            <img src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="My profile" class="w-6 h-6 rounded-full order-2">
         </div>
      </div>
      <div class="chat-message">
         <div class="flex items-end">
            <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
               <div><span class="px-4 py-2 rounded-lg inline-block bg-gray-100 text-gray-600">Command was run with root privileges. I'm sure about that.</span></div>
               <div><span class="px-4 py-2 rounded-lg inline-block bg-gray-100 text-gray-600">I've update the description so it's more obviously now</span></div>
               <div><span class="px-4 py-2 rounded-lg inline-block bg-gray-100 text-gray-600">FYI https://askubuntu.com/a/700266/510172</span></div>
               <div>
                  <span class="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-100 text-gray-600">
                     Check the line above (it ends with a # so, I'm running it as root )
                     <pre># npm install -g @vue/devtools</pre>
                  </span>
               </div>
            </div>
            <img src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="My profile" class="w-6 h-6 rounded-full order-1">
         </div>
      </div>
      <div class="chat-message">
         <div class="flex items-end justify-end">
            <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
               <div><span class="px-4 py-2 rounded-lg inline-block rounded-br-none bg-indigo-600 text-white ">Any updates on this issue? I'm getting the same error when trying to install devtools. Thanks</span></div>
            </div>
            <img src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="My profile" class="w-6 h-6 rounded-full order-2">
         </div>
      </div>
      <div class="chat-message">
         <div class="flex items-end">
            <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
               <div><span class="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-100 text-gray-600">Thanks for your message David. I thought I'm alone with this issue. Please, ? the issue to support it :)</span></div>
            </div>
            <img src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="My profile" class="w-6 h-6 rounded-full order-1">
         </div>
      </div>
      <div class="chat-message">
         <div class="flex items-end justify-end">
            <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
               <div><span class="px-4 py-2 rounded-lg inline-block bg-indigo-600 text-white ">Are you using sudo?</span></div>
               <div><span class="px-4 py-2 rounded-lg inline-block rounded-br-none bg-indigo-600 text-white ">Run this command sudo chown -R `whoami` /Users/{{your_user_profile}}/.npm-global/ then install the package globally without using sudo</span></div>
            </div>
            <img src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="My profile" class="w-6 h-6 rounded-full order-2">
         </div>
      </div>
      <div class="chat-message">
         <div class="flex items-end">
            <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
               <div><span class="px-4 py-2 rounded-lg inline-block bg-gray-100 text-gray-600">It seems like you are from Mac OS world. There is no /Users/ folder on linux ?</span></div>
               <div><span class="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-100 text-gray-600">I have no issue with any other packages installed with root permission globally.</span></div>
            </div>
            <img src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="My profile" class="w-6 h-6 rounded-full order-1">
         </div>
      </div>
      <div class="chat-message">
         <div class="flex items-end justify-end">
            <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
               <div><span class="px-4 py-2 rounded-lg inline-block rounded-br-none bg-indigo-600 text-white ">yes, I have a mac. I never had issues with root permission as well, but this helped me to solve the problem</span></div>
            </div>
            <img src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="My profile" class="w-6 h-6 rounded-full order-2">
         </div>
      </div>
      <div class="chat-message">
         <div class="flex items-end">
            <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
               <div><span class="px-4 py-2 rounded-lg inline-block bg-gray-100 text-gray-600">I get the same error on Arch Linux (also with sudo)</span></div>
               <div><span class="px-4 py-2 rounded-lg inline-block bg-gray-100 text-gray-600">I also have this issue, Here is what I was doing until now: #1076</span></div>
               <div><span class="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-100 text-gray-600">even i am facing</span></div>
            </div>
            <img src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="My profile" class="w-6 h-6 rounded-full order-1">
         </div>
      </div>
   </div>
   <div class="-t -gray-200 px-4 pt-4 mb-2 sm:mb-0">
      <div class="relative flex">
         <span class="absolute inset-y-0 flex items-center">
            <button type="button" class="inline-flex items-center justify-center rounded-full h-12 w-12 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-100 focus:outline-none">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6 text-gray-600">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>
               </svg>
            </button>
         </span>
         <input type="text" placeholder="Write your message!" class="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-12 bg-gray-200 rounded-md py-3">
         <div class="absolute right-0 items-center inset-y-0 hidden sm:flex">
            <button type="button" class="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-100 focus:outline-none">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6 text-gray-600">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path>
               </svg>
            </button>
            <button type="button" class="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-100 focus:outline-none">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6 text-gray-600">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path>
               </svg>
            </button>
            <button type="button" class="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-100 focus:outline-none">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6 text-gray-600">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
               </svg>
            </button>
            <button type="button" class="inline-flex items-center justify-center rounded-none px-4 py-3 transition duration-500 ease-in-out text-white bg-indigo-500 hover:bg-indigo-400 focus:outline-none">
               <span class="font-bold">Send</span>
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-6 w-6 ml-2 transform rotate-90">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
               </svg>
            </button>
         </div>
      </div>
   </div>
</div>
</div>
 


<!-- Related Streams -->

  <div class="bg-gray-900 py-24 sm:py-16">
   <h1 class="text-white text-3xl font-light">More Streams from <a href="#" class="underline ">Kashif Sulehria</a>:</h1>
    <div class="mx-auto max-w-full  text-center ">
   
      <ul role="list" class="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4 lg:gap-8">
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
  </div>
  </div>
</template>

<script setup>
import Video from '@/components/Video.vue';
import Tabs from '@/components/HomePageComp/Tabs.vue'

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

<style   scoped>
.scrollbar-w-2::-webkit-scrollbar {
  width: 0.25rem;
  height: 0.25rem;
}

.scrollbar-track-indigo-lighter::-webkit-scrollbar-track {
  --bg-opacity: 1;
  background-color: #f7fafc;
  background-color: rgba(247, 250, 252, var(--bg-opacity));
}

.scrollbar-thumb-indigo::-webkit-scrollbar-thumb {
  --bg-opacity: 1;
  background-color: #edf2f7;
  background-color: rgba(237, 242, 247, var(--bg-opacity));
}

.scrollbar-thumb-rounded::-webkit-scrollbar-thumb {
  -radius: 0.25rem;
}
</style>