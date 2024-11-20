/* eslint-disable react/prop-types */

import { Helmet } from "react-helmet";


export const DictionaryDetails = ({word}) => {
    console.log(word);
    
  return (
    <>
      <Helmet>
        <title>Dictionary</title>
        <meta name="author" content="bdedujob.info" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta
          name="description"
          content="BD Edu Job - Latest Job Circular and Educational News in Bangladesh."
        />
        <link rel="canonical" href="https://bdedujob.info" />
        <link rel="icon" href="/favicon.ico" />
      </Helmet>
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
    </>
  );
}
