let availableGrounds = [];
let bookedSlots = [];

// Problem 1:
// Create a function to add a new sports ground to the available grounds list with details like name and available time slots

// Problem 2:
// Create a function to view all available sports grounds

// Problem 3:
// Create a function to book a time slot for a specific sports ground, updating the booked slots list

// Problem 4:
// Create a function to view the booked time slots for each sports ground

// Test cases:
// addGroundToAvailableGrounds('Soccer Field', ['9:00 AM - 11:00 AM', '2:00 PM - 4:00 PM']) -> Sports ground added to available grounds: Soccer Field (Available Slots: 9:00 AM - 11:00 AM, 2:00 PM - 4:00 PM)
// addGroundToAvailableGrounds('Tennis Court', ['1:00 PM - 3:00 PM', '5:00 PM - 7:00 PM']) -> Sports ground added to available grounds: Tennis Court (Available Slots: 1:00 PM - 3:00 PM, 5:00 PM - 7:00 PM)
// viewAvailableGrounds() -> Display all available sports grounds

// bookTimeSlot('Soccer Field', '9:00 AM - 11:00 AM', 'Alice') -> Time slot booked: Soccer Field (9:00 AM - 11:00 AM) booked by Alice
// bookTimeSlot('Tennis Court', '1:00 PM - 3:00 PM', 'Bob') -> Time slot booked: Tennis Court (1:00 PM - 3:00 PM) booked by Bob
// viewBookedSlots() -> Display booked time slots:
// 1. Soccer Field - 9:00 AM - 11:00 AM booked by Alice
// 2. Tennis Court - 1:00 PM - 3:00 PM booked by Bob
