'use client'

import { faQuoteRight } from "@fortawesome/free-solid-svg-icons/faQuoteRight";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Reviews() {
  return (
    <div
        id="reviews"
        className="mt-5 pb-5 flex flex-column "
        style={{ alignItems: "center"}}
    >
        <div className="mx-auto p-2 ">
            <h1 className="display-4 mb-5 text-drop-shadow">Customer Reviews</h1>
        </div>

        <div className ="container text-center">
        <div className="row row-cols-1 row-cols-xl-3 g-5">
        <div className="col">
          <div className="card dropShadow">
            <FontAwesomeIcon icon={faQuoteRight} size={'2xl'} className="mt-3"/>
            <div className="card-body m-3">
              <blockquote className="blockquote mb-0">
              <p className="card-text">I strongly recommend Rick without hesitation. He has been taking care of my property for the last few years and it always looks great. He is exceptionally professional and knowledgeable and is available to answer any questions I have.
              He pays attention to detail and is always punctual and easy to get in touch with. His prices are very reasonable. I&apos;d recommend him to anyone looking for realiable professional services. You won&#39;t be dissappointed .</p>
              </blockquote>
              <div className=" text-body-secondary mt-3">
                <footer className="blockquote-footer mt-3"> <cite title="Source Title">Beth</cite></footer>
              </div>
              
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card dropShadow">
            <FontAwesomeIcon icon={faQuoteRight} size={'2xl'} className="mt-3"/>
            <div className="card-body m-3">
              <blockquote className="blockquote mb-0">
              <p className="card-text">We have had the pleasure of using Richard&apos;s services over the last two springs and summers. He&apos;s cleaned up all the gardens, laid mulch, trimmed trees and hedges.
                We found his pricing very reasonable. He and his helper are professional trustworthy and always on schedule. Richard&apos;s work was done efficiently and to our satisfaction. Many thanks Richard and we
                look forward to your continued service.
              </p>
              </blockquote>
              <div className="text-body-secondary mt-3">
                <footer className="blockquote-footer mt-3"> <cite title="Source Title">Christine</cite></footer>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
        <div className="card dropShadow">
            <FontAwesomeIcon icon={faQuoteRight} size={'2xl'} className="mt-3"/>
            <div className="card-body m-3">
              <blockquote className="blockquote mb-0">
              <p className="card-text">Richard Doucet is a great person to work with, bringing expert knowledge, integrity and a very easy to work with approach. 
              In each of my engagements with Richard he was quick to respond and to offer solutions. Richard was always available and eager to meet and answer my questions and concerns.
              </p>
              </blockquote>
              <div className="text-body-secondary mt-3">
                <footer className="blockquote-footer mt-3"> <cite title="Source Title">Geneviève</cite></footer>
              </div>
            </div>
          </div>
        </div>
      
      </div>
      </div>
    </div>

  );
}
