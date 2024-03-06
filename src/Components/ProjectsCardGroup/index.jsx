import prepair_icon from '../../image/planks.png';
import payment_center_icon from '../../image/pay_center.png';
import amazon_icon from '../../image/amazon.png';
import "./style.css"

const ProjectsCardGroup = () => {
  return (
    <div className="project-card-group">
      <ul>
        <li className="project-card">
          <div className="logo relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
            <img
              alt="prepair_icon"
              src={prepair_icon}
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
          <a>Git Hub Link</a>
        </li>
        <li className="project-card">
        <div className="logo relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
            <img
              alt="prepair_icon"
              src={payment_center_icon}
              width="400"
              className="h-7 w-7 rounded-full tranparente"
            />
          </div>
          <h2>
            Payment Center :An Appplication that mimics the AMEX 
            application I helped develop while working on the MYCA Team.
          </h2>
          <p className="project-card-paragraph">
            If you do find this paragraph tool useful, please do us a favor and
            let us know how you're using it. It's greatly beneficial for us to
            know the different ways this tool is being used so we can improve it
            with updates. This is especially true since there are times when the
            generators we create get used in completely unanticipated ways from
            when we initially created them.{" "}
          </p>
          <a>Git Hub Link</a>
        </li>
        <li className="project-card">
        <div className="logo relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
            <img
              alt="prepair_icon"
              src={amazon_icon}
              width="400"
              className="h-7 w-7 rounded-full tranparente"
            />
          </div>
          <h2>
            Amazon Clone : We all have shopped and enjoy PRIME. I cloned this web based application
            to show use of the REDUX tool in action with the CART functinality.
          </h2>
          <p className="project-card-paragraph">
            If you do find this paragraph tool useful, please do us a favor and
            let us know how you're using it. It's greatly beneficial for us to
            know the different ways this tool is being used so we can improve it
            with updates. This is especially true since there are times when the
            generators we create get used in completely unanticipated ways from
            when we initially created them.{" "}
          </p>
          <a>Git Hub Link</a>
        </li>
        <li className="project-card">
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
          <a>Git Hub Link</a>
        </li>
      </ul>
    </div>
  );
};

export default ProjectsCardGroup;
