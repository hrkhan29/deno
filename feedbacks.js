const getCount = async (id) => {
  const kv = await Deno.openKv();
  const count = await kv.get(["feedback"+String(id)]);
  return count.value ?? 0;
}

const incrementFeedbacks = async (id) => {
    let count = await getCount(id);
    count++;
    await setFeedbacks(id,count);
    console.log('count',count)
}

 const setFeedbacks = async (id, count) => {
     const kv = await Deno.openKv();
     await kv.set(["feedback"+String(id)], count);
 }// empty but can be used
 
 export {incrementFeedbacks, getCount};