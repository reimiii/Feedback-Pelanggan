import { createContext, useState } from "react"
import { v4 as uuidv4 } from "uuid"

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'Wahh bagus ni orang nya ramah',
      rating: 10
    },
    {
      id: 2,
      text: 'Kopinya pahit ga di kasih gula',
      rating: 5
    },
    {
      id: 3,
      text: 'Kurir Tydak ramah dan Tydac sopan',
      rating: 1
    },
    {
      id: 4,
      text: 'Lumayan lah daripada ga ada',
      rating: 7
    },
    {
      id: 5,
      text: 'Adeh barang nya rusak',
      rating: 2
    },
  ])
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false
  })

  const addFeedback = (newFeedback) => {
		newFeedback.id = uuidv4()
		setFeedback([newFeedback, ...feedback])
	}

  const deleteFeedback = (id) => {
		if(window.confirm('Seriusan? mau dihapus')) {
			setFeedback(feedback.filter((item) => item.id !== id))
		}
	}

  const updateFeedback = (id, updItem) => {
    setFeedback(feedback.map((item) => item.id === id ? {
      ...item, ...updItem
    } : item))
  }

  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true
    })
  }

  return (
    <FeedbackContext.Provider value={{
      feedback,
      feedbackEdit,
      updateFeedback,
      deleteFeedback,
      addFeedback,
      editFeedback,
    }}>
      {children}
    </FeedbackContext.Provider>
  
  )
}

export default FeedbackContext