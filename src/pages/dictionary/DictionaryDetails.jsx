/* eslint-disable react/prop-types */


export const DictionaryDetails = ({word}) => {
    console.log(word);
    
  return (
    <div>
      <div className="px-3 max-w-screen-md mx-auto ">
        <div className="border shadow rounded-md  p-8 my-5">
          <div className="flex flex-col gap-2">
            <p className="text-2xl font-bold hover:underline duration-300 underline-offset-8">
              {word.name}
            </p>
            <p className="text-xl">
              <span className="font-medium">Meaning/অর্থঃ</span> {word.meaning}
            </p>
            <p className="text-xl">
              <span className="font-medium">Synonyms/সামর্থক শব্দঃ</span>{" "}
              {word.synonyms}
            </p>
            <p className="text-xl ">
              {" "}
              <span className="font-medium">Antonyms /বিপরিত শব্দঃ</span>{" "}
              {word.antonyms}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
