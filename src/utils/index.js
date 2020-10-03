export const validateEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

export const convertToBlob = async (buffer, name) => {
  let arrayBuffer = await new Uint8Array(buffer);
  let blob = await new Blob([arrayBuffer], {
    type: 'image/jpeg',
  });
  //@ts-ignore
  blob.name = `${name}.jpg`;
  return blob;
};
