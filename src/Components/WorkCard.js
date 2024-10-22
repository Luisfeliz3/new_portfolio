import amex_icon from "../image/amex.png";
import interMedia_icon from "../image/intermediagrp_logo.jpeg";
import cigniti_icon from "../image/cigniti.png";
import columbia_icon from "../image/cumbia.jpeg";
import devry_icon from "../image/devry_uni.jpeg";
import comp_icon from "../image/comp_geeks.png";
import pc_icon from "../image/pc_rep.png";

const WorkCard = () => {
  return (
    <div>

<div>
        <div className="work-card mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
   <div className=" space-y-10 lg:pl-16 xl:pl-24">
      <div className=" rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
         <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" className="h-6 w-6 flex-none">
               <path d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z" className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"></path>
               <path d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5" className="stroke-zinc-400 dark:stroke-zinc-500"></path>
            </svg>
            <span className="ml-3 text-zinc-900">Work</span>
         </h2>
         <ol className="mt-6 space-y-4">
         <li className="flex gap-4">
               <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0"><img alt="" src={interMedia_icon} width="400" height="400" decoding="async" data-nimg="future" className="h-7 w-7 rounded-full tranparente" loading="lazy" /></div>
               <dl className="flex flex-auto flex-wrap gap-x-2">
                  <dt className="sr-only">Company</dt>
                  <dd className="w-full flex-none text-sm font-medium text-zinc-900">Intermedia Group Inc.</dd>
                  <dt className="sr-only">Role</dt>
                  <dd className="text-xs text-zinc-500 dark:text-zinc-400">Software &amp; Test Engineer</dd>
                  <dt className="sr-only">Date</dt>
                  <dd className="ml-auto text-xs text-zinc-400 dark:text-zinc-500" aria-label="Oct 2017 until Nov 2021"><time datetime="Oct 2017">Oct 2021</time> <span aria-hidden="true">—</span> <time datetime="Nov 2021">Present</time></dd>
               </dl>
            </li>
            <li className="flex gap-4">
               <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0"><img alt="" src={amex_icon} width="400" height="400" decoding="async" data-nimg="future" className="h-7 w-7 rounded-full tranparente" loading="lazy" /></div>
               <dl className="flex flex-auto flex-wrap gap-x-2">
                  <dt className="sr-only">Company</dt>
                  <dd className="w-full flex-none text-sm font-medium text-zinc-900">Amex</dd>
                  <dt className="sr-only">Role</dt>
                  <dd className="text-xs text-zinc-500 dark:text-zinc-400">Software &amp; Test Engineer</dd>
                  <dt className="sr-only">Date</dt>
                  <dd className="ml-auto text-xs text-zinc-400 dark:text-zinc-500" aria-label="Oct 2017 until Nov 2021"><time datetime="Oct 2017">Oct 2017</time> <span aria-hidden="true">—</span> <time datetime="Nov 2021">Oct 2021</time></dd>
               </dl>
            </li>
            <li className="flex gap-4">
               <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0"><img alt="" src={cigniti_icon} width="500" height="500" decoding="async" data-nimg="future" className="h-7 w-7 rounded-full tranparente" loading="lazy" /></div>
               <dl className="flex flex-auto flex-wrap gap-x-2">
                  <dt className="sr-only">Company</dt>
                  <dd className="w-full flex-none text-sm font-medium text-zinc-900 ">Cigniti</dd>
                  <dt className="sr-only">Role</dt>
                  <dd className="text-xs text-zinc-500 dark:text-zinc-400">Software &amp; Test Engineer</dd>
                  <dt className="sr-only">Date</dt>
                  <dd className="ml-auto text-xs text-zinc-400 dark:text-zinc-500" aria-label="Apr 2016 until Present"><time datetime="Apr 2016">Apr 2016</time> <span aria-hidden="true">—</span> <time datetime="Aug 2017">Aug 2017</time></dd>
               </dl>
            </li>
            <li className="flex gap-4">
               <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0"><img alt="" src={columbia_icon} width="508" height="503" decoding="async" data-nimg="future" className="h-7 w-7 rounded-full tranparente" loading="lazy" /></div>
               <dl className="flex flex-auto flex-wrap gap-x-2">
                  <dt className="sr-only">Company</dt>
                  <dd className="w-full flex-none text-sm font-medium text-zinc-900">Columbia University</dd>
                  <dt className="sr-only">Role</dt>
                  <dd className="text-xs text-zinc-500 dark:text-zinc-400">M.E.R.N Certification</dd>
                  <dt className="sr-only">Date</dt>
                  <dd className="ml-auto text-xs text-zinc-400 dark:text-zinc-500" aria-label="Jan 2023 until Present"><time datetime="Jan 2023">July 2020</time> <span aria-hidden="true">—</span> <time datetime="Jan 2021">Jan 2021</time></dd>
               </dl>
            </li>
            <li className="flex gap-4">
               <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0"><img alt="" src={devry_icon} width="600" height="601" decoding="async" data-nimg="future" className="h-7 w-7 rounded-full tranparente" loading="lazy" /></div>
               <dl className="flex flex-auto flex-wrap gap-x-2">
                  <dt className="sr-only">Company</dt>
                  <dd className="w-full flex-none text-sm font-medium text-zinc-900 ">Devry University</dd>
                  <dt className="sr-only">Role</dt>
                  <dd className="text-xs text-zinc-500 dark:text-zinc-400">Bachelor's in Computer &amp; Technology </dd>
                  <dt className="sr-only">Date</dt>
                  <dd className="ml-auto text-xs text-zinc-400 dark:text-zinc-500" aria-label="Feb 2022 until Present"><time datetime="Feb 2022">March 2011</time> <span aria-hidden="true">—</span> <time datetime="Dec 2016">Dec 2016</time></dd>
               </dl>
            </li>
            <li className="flex gap-4">
               <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0"><img alt="" src={pc_icon} width="590" height="590" decoding="async" data-nimg="future" className="h-7 w-7 rounded-full tranparente" loading="lazy" /></div>
               <dl className="flex flex-auto flex-wrap gap-x-2">
                  <dt className="sr-only">Company</dt>
                  <dd className="w-full flex-none text-sm font-medium text-zinc-900">Luis's Computer Services</dd>
                  <dt className="sr-only">Role</dt>
                  <dd className="text-xs text-zinc-500 dark:text-zinc-400">C.E.O / Technical Consultant</dd>
                  <dt className="sr-only">Date</dt>
                  <dd className="ml-auto text-xs text-zinc-400 dark:text-zinc-500" aria-label="February 2010 until July 2016"><time datetime="April 2022">Feb 2010</time> <span aria-hidden="true">—</span> <time datetime="July 2016">July 2016</time></dd>
               </dl>
            </li>
            <li className="flex gap-4">
               <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0"><img alt="" src={comp_icon} width="464" height="464" decoding="async" data-nimg="future" className="h-7 w-7 rounded-full tranparente" loading="lazy" /></div>
               <dl className="flex flex-auto flex-wrap gap-x-2">
                  <dt className="sr-only">Company</dt>
                  <dd className="w-full flex-none text-sm font-medium text-zinc-900">Computer Geeks</dd>
                  <dt className="sr-only">Role</dt>
                  <dd className="text-xs text-zinc-500 dark:text-zinc-400">Technical Consultant</dd>
                  <dt className="sr-only">Date</dt>
                  <dd className="ml-auto text-xs text-zinc-400 dark:text-zinc-500" aria-label="June 2007 until Feb 2010"><time datetime="June 2007">June 2008</time> <span aria-hidden="true">—</span> <time datetime="Aug 2022">Feb 2010</time></dd>
               </dl>
            </li>
          
         </ol>
      </div>
   </div>
</div> 
    </div>
    </div>
  )
}

export default WorkCard