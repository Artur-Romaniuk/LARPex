import EventTimeslotResponseDto from "./EventTimeslotResponseDto.ts";

interface UserEventDto extends EventTimeslotResponseDto {
  isEnrolled: boolean;
}

export default UserEventDto;
