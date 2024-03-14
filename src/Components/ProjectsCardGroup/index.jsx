import prepair_icon from "../../image/planks.png";
import payment_center_icon from "../../image/pay_center.png";
import amazon_icon from "../../image/amazon.png";
import "./style.css";

const ProjectsCardGroup = () => {
  return (
    <div className="project-card-group">
      <ul className="project-card-ul">
        
        <li className="project-card one">
        <a className="card-link" href="https://github.com/Luisfeliz3/prepair">
          <div className="logo relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
            <img
              alt="prepair_icon"
              src={prepair_icon}
              width="400"
              className="h-7 w-7 rounded-full tranparente"
            />
          </div>
          <h2>
          Prepair: An application used to build DIY home furniture. 
          The application makes building it at home easy! A click-and-order concept.
          </h2>
          <p className="project-card-paragraph">
          Moving to a new place? Need custom furniture? 
          The Prepair app helps you choose materials, 
          measurements, & build custom pieces like tables, 
          chairs, & more, ensuring you avoid mistakes.
          No more hassles hunting for materials & puzzling intructions to build your unit.
          Choose what to build, choose materials, insert measurements, click & buy !
          </p>
          <a className="app-links" href="https://github.com/Luisfeliz3/prepair">
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              class="h-6 w-6 flex-none"
            >
              <path
                d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
                fill="currentColor"
              ></path>
            </svg>
            <span class="ml-2">GitHub</span>
            
          </a>
          </a>
        </li>
        <li className="project-card two">
        <a className="card-links" href="https://github.com/Luisfeliz3/paymentcenter">
          <div className="logo relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
            
            <img
              alt="prepair_icon"
              src={payment_center_icon}
              width="400"
              className="h-7 w-7 rounded-full tranparente"
            />
          </div>
          <h2>
          Payment Center: An application that mimics the AMEX application 
          I helped develop while working on the MYCA Team.
          </h2>
          <p className="project-card-paragraph">
          This project replicates my previous work, 
          allowing me to apply my experience and skills in web development using tools like React, 
          MongoDB, Node, and ExpressJS, along with coding patterns like MVC, 
          and testing tools such as Selenium, Jest, Cucumber, 
          and TestNG with both Java and JavaScript. 
          All of which were used to deploy code to millions of users using Agile methodologies.
       
          </p>
          <a className="app-links" href="https://github.com/Luisfeliz3/paymentcenter">
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              class="h-6 w-6 flex-none"
            >
              <path
                d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
                fill="currentColor"
              ></path>
            </svg>
            <span class="ml-2">GitHub</span>
          </a>
          </a>
        </li>
        <li className="project-card three">
        <a className="card-links" href="https://github.com/Luisfeliz3/amazon-clone">
          <div className="logo relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
            <img
              alt="prepair_icon"
              src={amazon_icon}
              width="400"
              className="h-7 w-7 rounded-full tranparente"
            />
          </div>
          <h2>
          Amazon Clone: Who doesn't enjoy Prime! 
          I cloned it to demonstrate the use of the 
          Redux tool in action with the cart functionality.
          </h2>
          <p className="project-card-paragraph">
          We all have shopped at Amazon sometime in our lives. 
          My wishlist is full of stuff that I don’t really need. 
          I might just go on a clicking frenzy one day and buy everything on that list. 
          I decided to make a clone app that shows both the design aspect of software 
          development and the technical part of programming. 
          Using Tailwind, React, React-Router, and Redux to demonstrate the add-to-cart functionality.
          </p>
          <a className="app-links" href="https://github.com/Luisfeliz3/amazon-clone">
          <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              class="h-6 w-6 flex-none"
            >
              <path
                d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
                fill="currentColor"
              ></path>
            </svg>
            <span class="ml-2">GitHub</span>
          </a>
          </a>
        </li>
        {/* <li className="project-card">
          <div className="logo relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
            <img
              alt="prepair_icon"
              src={amazon_icon}
              width="400"
              className="h-7 w-7 rounded-full tranparente"
            />
          </div>
          <h2>
            Prepair :An Appplication used to build DIY home furniture. The
            Applications make building easy{" "}
          </h2>
          <p className="project-card-paragraph">
            If you do find this paragraph tool useful, please do us a favor and
            let us know how you're using it. It's greatly beneficial for us to
            know the different ways this tool is being used so we can improve it
            with updates. This is especially true since there are times when the
            generators we create get used in completely unanticipated ways from
            when we initially created them.{" "}
          </p>
          <a className="app-links">
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              class="h-6 w-6 flex-none"
            >
              <path
                d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
                fill="currentColor"
              ></path>
            </svg>
            <span class="ml-2">GitHub</span>
          </a>
        </li> */}
      </ul>
    </div>
  );
};

export default ProjectsCardGroup;
