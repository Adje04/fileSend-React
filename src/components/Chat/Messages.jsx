

import React from 'react'
export default function Messages({ user, content, type }) {
  const isMe = user === 'me'; 
  const isImage = (fileName) => {
      if (typeof fileName !== 'string') {
          return false;
      }
      const imageExtensions = ['jpg', 'jpeg', 'png'];
      const fileExtension = fileName.split('.').pop().toLowerCase();
      return imageExtensions.includes(fileExtension);
  };

  if (!content) {
      return null; // or some fallback UI
  }

  return (
      <div className={`flex ${isMe ? 'justify-end' : 'justify-start'} mb-4`}>
          <div className={`p-3 rounded-lg max-w-sm shadow-lg ${isMe ? 'bg-blue-100 text-white' : 'bg-purple-600 text-white'}`}>
              {type === 'file' ? (
                  isImage(content) ? (
                      <div className="relative group">
                          <img src={`http://127.0.0.1:8000/storage/${content}`} alt="Uploaded file" className="rounded-lg max-w-xs" />
                          <div className="absolute inset-0 bg-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                              <a
                                  href={`http://127.0.0.1:8000/storage/${content}`}
                                  download
                                  className="inline-flex items-center justify-center rounded-full h-10 w-10 bg-white/30 hover:bg-white/50 focus:ring-4 focus:outline-none text-white"
                              >
                                  <svg className="w-5 h-5" fill="none" viewBox="0 0 16 18">
                                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 1v11m0 0 4-4m-4 4L4 8m11 4v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3" />
                                  </svg>
                              </a>
                          </div>
                      </div>
                  ) : (
                      <div className="flex items-start bg-gray-50 dark:bg-gray-700 rounded-xl p-2">
                          <div className="me-2">
                              <span className="flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-white">
                                  {content.split('/').pop()}
                              </span>
                              <span className="flex text-xs font-normal text-gray-500 dark:text-gray-400 gap-2">
                                  File
                              </span>
                          </div>
                          <a
                              href={`http://127.0.0.1:8000/storage/${content}`}
                              download
                              className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                          >
                             <svg className="w-4 h-4 text-gray-900 dark:text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z"/>
                                    <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"/>
                                </svg>
                          </a>
                      </div>
                  )
              ) : (  <span>{content}</span> )}
          </div>
      </div>
  );
}
