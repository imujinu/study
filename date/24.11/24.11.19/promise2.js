function job(state) {
  return new Promise(function (resolve, reject) {
    if (state) {
      resolve("success");
    } else {
      reject("error");
    }
  });
}

let promise = job(true);

promise

  .then(function (data) {
    // A
    console.log(data);

    return job(false);
  })

  .catch(function (error) {
    // B
    console.log(error);

    return "Error caught";
  })

  .then(function (data) {
    // C
    console.log(data);

    return job(true);
  })

  .catch(function (error) {
    // D
    console.log(error);
  });
