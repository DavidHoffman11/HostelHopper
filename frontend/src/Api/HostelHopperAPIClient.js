import axios from 'axios';

export class HostelHopperAPIClient
{

  url = 'http://sampledockercompose.cdgpbu8t7kia.us-east-2.rds.amazonaws.com'

  config = {};

  login(email, password)
  {
    return new Promise((resolve, reject) =>
    {
      axios.post(
          `${this.url}/login`,
          {
            "email": email,
            "password": password,
          },
        )
        .then(response => resolve(response.data))
        .catch(error => alert(error));
    });
  }

}