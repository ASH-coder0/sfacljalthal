'use client';
import CustomImage from '@/components/CustomImage';
import { getSingleEvent } from '@/redux/slices/eventSlice';
import { useParams } from 'next/navigation';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const SingleEvent = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  // Fetch the press release data from the Redux store
  const { singleEvent } = useSelector((state) => state.event);
  const eventDate = singleEvent?.event_date && new Date(singleEvent?.event_date).toISOString().split('T')[0];

  const createdAt = singleEvent?.createdAt && new Date(singleEvent?.createdAt).toISOString().split('T')[0];

  useEffect(() => {
    if (id) {
      dispatch(getSingleEvent(id));
    }
  }, [dispatch, id]);

  return (
    <div className='flex flex-row justify-between px-2 md:px-8 lg:px-20 py-2 pt-10 pb-20 '>
      <article className="md:col-span-2 w-full format format-sm sm:format-base lg:format-lg format-blue">
        <header className="mb-4 lg:mb-6 not-format">
          <h1 className="mb-4 text-[2rem] font-extrabold text-left lg:mb-6 lg:text-[2.5rem] pl-0  text-black">
            {singleEvent?.title}
          </h1>

          <address className="flex justify-between items-center mb-6 not-italic">
            <div className="flex space-x-2 items-center mr-3 text-sm text-gray-900 ">
              <CustomImage
                src={`bardhaghatcci.png`}
                className="h-10 w-10 rounded-full"
              />
              <div>
                <a
                  href="#"
                  rel="author"
                  className="text-xl font-bold text-gray-900"
                >
                  {singleEvent?.author}
                </a>
                <p className="text-base text-gray-500">
                  <time title="">

                    {createdAt}
                  </time>
                </p>
              </div>
            </div>
          </address>
        </header>

        {singleEvent?.featuredImage && <figure className="lg:py-10 py-4 max-h-[90vh] max-w-[90vw] flex justify-center px-10">
          <CustomImage src={singleEvent?.featuredImage} className="object-fill max-w-full min-w-[300px] min-h-[300px]" />
        </figure>
        }
        <div
          className="text-black prose-h1:text-justify prose-h1:font-bold prose-p:text-black prose-p:text-sm md:prose-p:text-[1.25rem] prose-p:leading-8 prose-p:py-2"
          dangerouslySetInnerHTML={{ __html: singleEvent?.content }}
        ></div>

        <p className="text-base text-gray-500">
          <time title="">
            Event Date: {eventDate}
          </time>
        </p>
      </article>
    </div>
  );
};

export default SingleEvent;
