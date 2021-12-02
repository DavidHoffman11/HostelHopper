import axios from 'axios';

export class HostelHopperAPIClient
{

  url = 'http://localhost:8000/api'

  config = {};

  login(email, password)
  {
    return new Promise((resolve, reject) =>
    {
      axios.post(
          `${this.url}/login/`,
          {
            "email": email,
            "password": password,
          },
        )
        .then(response => resolve(response.data))
        .catch(error => alert(error));
    });
  }

  register(name, email, password, image_url)
  {
    return new Promise((resolve, reject) =>
    {
      axios.post(
          `${this.url}/user/`,
          {
            "name": name,
            "email": email,
            "password": password,
            "image_url": image_url,
          },
        )
        .then(response => resolve(response.data))
        .catch(error => alert(error));
    });
  }

  getUserInfo(user_id)
  {
    return new Promise((resolve, reject) =>
    {
      axios.get(
          `${this.url}/user/${user_id}`,
        )
        .then(response => resolve(response.data))
        .catch(error => alert(error));
    });
  }

  getAllUsers()
  {
    return new Promise((resolve, reject) =>
    {
      axios.get(
          `${this.url}/user/`,
        )
        .then(response => console.log(typeof(response.data)))
        .catch(error => console.log(error));
    });
  }

  updateUser(user_id, name, email, password, image_url)
  {
    debugger;
    return new Promise((resolve, reject) =>
    {
      axios.put(
          `${this.url}/user/${user_id}`,
          {
            "id":user_id,
            "name": name,
            "email": email,
            "password": password,
            "image_url": image_url
          },
        )
        .then(response => resolve(response.data))
        .catch(error => console.log(error.response));
    });
  }

  deleteUser(user_id)
  {
    return new Promise((resolve, reject) =>
    {
      axios.delete(
          `${this.url}/user/${user_id}`,
        )
        .then(response => resolve(response.data))
        .catch(error => alert(error));
    });
  }

  getAllHosts()
  {
    return new Promise((resolve, reject) =>
    {
      axios.get(
          `${this.url}/host/`,
        )
        .then(response => resolve(response.data))
        .catch(error => alert(error));
    });
  }

  createHost(name, email, password, body, price, zip_code, image_url, food_info, living_options, attractions, is_pet_friendly, is_covid_safe, has_lockers, has_gendered_rooms, location, slogan)
  {
    return new Promise((resolve, reject) =>
    {
      axios.post(
          `${this.url}/host/`,
          {
            "body": body,
            "price": price,
            "food_info": food_info,
            "living_options": living_options,
            "attractions": attractions,
            "is_pet_friendly": is_pet_friendly,
            "is_covid_safe": is_covid_safe,
            "has_lockers": has_lockers,
            "has_gendered_rooms": has_gendered_rooms,
            "name": name,
            "email": email,
            "password": password,
            "zip_code": zip_code,
            "image_url": image_url,
            "slogan": slogan,
            "location": location,
          },
        )
        .then(response => resolve(response.data))
        .catch(error => console.log(error.response));
    });
  }

  getHost(host_id)
  {
    return new Promise((resolve, reject) =>
    {
      axios.get(
          `${this.url}/host/${host_id}`,
        )
        .then(response => resolve(response.data))
        .catch(error => alert(error));
    });
  }

  updateHost(host_id, updateJSON)
  {
    return new Promise((resolve, reject) =>
    {
      axios.put(
          `${this.url}/host/${host_id}`,
          updateJSON
        )
        .then(response => resolve(response.data))
        .catch(error => console.log(error.response));
    });
  }

  deleteHost(host_id)
  {
    return new Promise((resolve, reject) =>
    {
      axios.delete(
          `${this.url}/host/${host_id}`,
        )
        .then(response => resolve(response.data))
        .catch(error => alert(error));
    });
  }

  getReviews(host_id)
  {
    return new Promise((resolve, reject) =>
    {
      axios.get(
          `${this.url}/api/host/${host_id}/review/`,
        )
        .then(response => resolve(response.data))
        .catch(error => alert(error));
    });
  }

  postReview(host_id, user_id, body)
  {
    return new Promise((resolve, reject) =>
    {
      axios.post(
          `${this.url}/host/${host_id}/review/`,
          {
            "user_id": user_id,
            "body": body,
          }
        )
        .then(response => resolve(response.data))
        .catch(error => alert(error));
    });
  }

  deleteReview(host_id, review_id)
  {
    return new Promise((resolve, reject) =>
    {
      axios.delete(
          `${this.url}/host/${host_id}/review/${review_id}`,
        )
        .then(response => resolve(response.data))
        .catch(error => alert(error));
    });
  }

  gethostReviewLikes(host_id, review_id)
  {
    return new Promise((resolve, reject) =>
    {
      axios.get(

          `${this.url}/host/${host_id}/review/${review_id}like`,

        )
        .then(response => resolve(response.data))
        .catch(error => alert(error));
    });
  }

  likeHostReview(host_id, user_id,review_id)
  {
    return new Promise((resolve, reject) =>
    {
      axios.post(

          `${this.url}/host/${host_id}/review/${review_id}/like`,

          {
            "user_id": user_id
          }
        )
        .then(response => resolve(response.data))
        .catch(error => alert(error));
    });
  }

  unlikeHostReview(host_id, user_id,review_id)
  {
    return new Promise((resolve, reject) =>
    {
      axios.delete(
          `${this.url}/host/${host_id}/review/${review_id}/like/${user_id}`,
        )
        .then(response => resolve(response.data))
        .catch(error => alert(error));
    });
  }

  didUserLikeHostReview(host_id, user_id, review_id)
  {
    return new Promise((resolve, reject) =>
    {
      axios.get(
          `${this.url}/host/${host_id}/review/${review_id}/like/${user_id}`,
        )
        .then(response => resolve(response.data))
        .catch(error => alert(error));
    });
  }
}
