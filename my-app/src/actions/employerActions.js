// I hope I'm setting this up right...


export const submitSignup = (data) => {
  return fetch('/employer/signup', {
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

// export const submitSignup = (data) => {
//   return fetch(`/employer/signup?companyName=${companyName}&amp;firstName=${firstName}&amp;lastName=${lastName}&amp;email=${email}&amp;password=${password}&amp;retypePassword=${retypePassword}&amp;url=${url}`, {
//     method: 'POST',
//     mode: 'CORS',
//     body: JSON.stringify(data),
//     headers: {
//       'Content-Type': 'application/x-www-form-urlencoded'
//     }
//   }).then(res => {
//     return res;
//   }).catch(err => err);
// };



// export function createBlogPost(data) {
//   return fetch('http://api.symfony-3.dev/app_dev.php/posts', {
//       method: 'POST',
//       mode: 'CORS',
//       body: JSON.stringify(data),
//       headers: {
//           'Content-Type': 'application/json'
//       }
//   }).then(res => {
//       return res;
//   }).catch(err => err);
// }