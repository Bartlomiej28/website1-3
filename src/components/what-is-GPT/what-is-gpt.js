import React from 'react'
import "./what-is-gpt.css";
export default function WhatIsGPT() {
  return (
    <div className="section what-is-gpt3" id="whatGPT">
          <div className="gpt-container col-xl-12 col-md-12 col-sm-12 container">
            <div className="gapping">
              <div className="first-section">
                <div className="row">
                  <div className="first-title h4 col-xl-3 col-md-3 col-sm-12">
                    What is GPT-3?
                  </div>
                  <div className="first-desc col-xl-9 col-md-9 col-sm-12">
                  ChatGPT is an advanced language model developed by OpenAI capable of interactively 
                  answering questions and engaging in dialogues on diverse topics using advanced natural 
                  language processing technologies. It leverages large-scale training data to generate coherent 
                  and contextually relevant responses.
                  </div>
                </div>
              </div>
              <div className="second-section ">
                <div className="row">
                  <div className="second-title h1 col-xl-8 col-md-8 col-sm-12 ">
                    The possibilities are beyond your imagination
                  </div>
                  <div className="second-desc col-xl-4 col-md-4 col-sm-12">
                    Explore The Library
                  </div>
                </div>
              </div>
              <div className="third-section ">
                <div className="row align">
                  <div className="section-first-item col-xl-4 col-md-4 col-sm-12">
                    <div className="first-item-title h4">Chatbots</div>
                    <div className="first-item-desc">
                      OpenAI's chatbots are AI-driven conversational agents designed to simulate human-like interactions, 
                      offering solutions ranging from customer support to personalized assistance. They leverage deep learning 
                      models like GPT to understand and respond to user queries with natural language understanding and generation capabilities. 
                    </div>
                  </div>
                  <div className="section-second-item col-xl-4 col-md-4 col-sm-12">
                    <div className="second-item-title h4">Knowledgebase</div>
                    <div className="second-item-desc">
                      OpenAI's knowledge base refers to a repository of structured information that supports its AI models 
                      in understanding and contextualizing data. This resource enhances the models' ability to provide accurate 
                      and informed responses across a wide range of topics and queries.
                    </div>
                  </div>
                  <div className="section-third-item col-xl-4 col-md-4 col-sm-12">
                    <div className="third-item-title h4">Education</div>
                    <div className="third-item-desc">               
                      Training ChatGPT involves feeding it vast amounts of text data from various sources, 
                      allowing it to learn patterns and contexts in language. Through iterative training processes 
                      and advanced machine learning techniques, OpenAI continually refines ChatGPT's ability to generate 
                      coherent and contextually relevant responses in conversations.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}
