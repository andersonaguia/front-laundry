export const formatTime = (time: number): string => {
  console.log(time);
  const totalSeconds = Math.floor(time / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const formattedTime = `${hours.toString().padStart(2,"0")}:${minutes
    .toString()
    .padStart(2,"0")}:${seconds.toString().padStart(2,"0")}`;
    return formattedTime;

};


export function parseISOString(dateString: string) {
  const parts = dateString.split('T');
  const datePart = parts[0];
  const timePart = parts[1].substring(0, 8);
  
  const [year, month, day] = datePart.split('-').map(Number);
  const [hour, minute, second] = timePart.split(':').map(Number);
  
  return new Date(Date.UTC(year, month - 1, day, hour, minute, second));
}
