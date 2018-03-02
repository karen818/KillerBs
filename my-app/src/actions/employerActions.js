// I hope I'm setting this up right...

// employer signup
export const submitSignup = (data) => {
  return fetch('http://localhost:3001/employer/signup', {
    method: 'POST',
    mode: 'CORS',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => {
    return res;
  }).catch(err => err);
}; 

// employer create job post

export const submitCreateJob = (data) => {
  return fetch('http://localhost:3001/job', {
    method: 'POST',
    mode: 'CORS',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => {
    return res;
  }).catch(err => err);
}; 

