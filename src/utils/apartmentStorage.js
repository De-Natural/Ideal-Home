/**
 * Utility to manage selected apartment data
 * Stores apartment info when user clicks "Book Now" and retrieves it on ViewApartment page
 */

export const storeSelectedApartment = (apartmentData) => {
  sessionStorage.setItem("selectedApartment", JSON.stringify(apartmentData));
};

export const getSelectedApartment = () => {
  const data = sessionStorage.getItem("selectedApartment");
  return data ? JSON.parse(data) : null;
};

export const clearSelectedApartment = () => {
  sessionStorage.removeItem("selectedApartment");
};
