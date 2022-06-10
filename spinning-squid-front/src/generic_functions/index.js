// encodage image base64
export default function returnBase64Img(fileObject) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileObject);
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.onerror = (error) => {
      reject(error);
    };
  });
}

// Reset localStorage (déconnexion)
export function resetStorage() {
  localStorage.clear();
}
