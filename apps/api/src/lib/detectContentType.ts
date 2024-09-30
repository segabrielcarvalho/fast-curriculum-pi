import fileType from 'file-type';

async function detectContentType(buffer) {
   const result = await fileType.fromBuffer(buffer);
   return result ? result.mime : null;
}
export default detectContentType;
