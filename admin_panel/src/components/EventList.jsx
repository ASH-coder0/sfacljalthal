import { useState } from 'react';
import { Card } from './ui/card'
import { Button } from './ui/button'
import { DeleteIcon, Edit } from 'lucide-react';
import AlertDialog from './AlertDialog';
import CustomImage from './CustomImage';
import PropTypes from "prop-types"

const EventList = ({ currentEvents, currentPage, totalPages, handlePageChange, handleEdit, handleDelete }) => {

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [eventId, setEventId] = useState(null);
  return (

    <>
    {isDialogOpen &&
      <AlertDialog
        onSubmit={() => {
          handleDelete(eventId);
          setIsDialogOpen(false);
          setEventId(null);
        }}
        onCancel={() => {
          setIsDialogOpen(false);
          setEventId(null);
        }}
        warningMessage='Delete'
        isCancel={true}
        message={`Are you sure want to delete event ?`}
      />

    }
      <div className="max-h-[65vh] overflow-y-scroll">
        <div className="grid grid-cols-2 gap-2">
          {currentEvents?.map((event) => {
            return (
              <Card key={event.id} className="p-4 grid" >
                <CustomImage
                  src={event.featuredImage}
                  className={`h-40 object-fit `}
                />
                <div>
                  <h3 className="text-xl font-bold">{event.title}</h3>
                  <p dangerouslySetInnerHTML={{ __html: event.content }} className="leading-2 line-clamp-4"></p>
                  <p>
                    <strong>Author:</strong> {event.author}
                  </p>
                  <p>
                    <strong>Status:</strong> {event.publish_status}
                  </p>
                  <p>
                    <strong>Event Date:</strong> {new Date(event.event_date).toISOString().split('T')[0]}
                  </p>
                  <div className="flex space-x-3 mt-2">

                    <button
                      onClick={() => {
                        handleEdit(event);
                      }}
                    >
                      <Edit color="blue" />
                    </button>
                    <button
                      onClick={() => {
                        setEventId(event.id);
                        setIsDialogOpen(true);
                      }}
                    >
                      <DeleteIcon color="red" />
                    </button>
                  </div>
                </div>

              </Card>
            );
          })}
        </div>
      </div>

      <div className="flex justify-between mt-4">
        <Button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        <span>
          {currentPage} of {totalPages}
        </span>
        <Button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </div>
    </>

  )
}

EventList.propTypes = {
  currentEvents: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  handlePageChange: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
}

export default EventList