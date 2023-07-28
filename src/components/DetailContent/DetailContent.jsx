/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import {
  StDetailContainer,
  StDetailForm,
  StDetailFormBox,
  StDetailFormButton,
  StDetailHeader,
  StInfo
} from '../../styles/DetailContent.styles';
import Button from '../Button/Button';
import Input from '../Input/Input';
import Info from '../Info/Info';
import DatePicker from '../DatePicker/DatePicker';
import RadioInput from '../Input/RadioInput';
import CheckboxInput from '../Input/CheckboxInput';
// import { useQuery } from '@tanstack/react-query';
// import { getTest } from '../../api/api';

function DetailContent() {
  const [infos, setInfos] = useState({
    info2: '',
    info4: ''
  });
  const { info2, info4 } = infos;

  const [selectedRadioValue, setSelectedRadioValue] = useState('');
  const [checkedValues, setCheckedValues] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const formattedDate = selectedDate.toLocaleDateString('ko-KR'); // 날짜를 로컬 스트링으로 변환

  const radioArray = [
    { label: '선택 1', id: '선택 1', htmlFor: '선택 1', name: '선택 1' },
    { label: '선택 2', id: '선택 2', htmlFor: '선택 2', name: '선택 2' },
    { label: '선택 3', id: '선택 3', htmlFor: '선택 3', name: '선택 3' }
  ];

  const checkBoxArray = [
    { label: '선택 1', id: '선택 1', htmlFor: '선택 1', name: '선택 1', value: '선택1' },
    { label: '선택 2', id: '선택 2', htmlFor: '선택 2', name: '선택 2', value: '선택2' },
    { label: '선택 3', id: '선택 3', htmlFor: '선택 3', name: '선택 3', value: '선택3' }
  ];

  // 정보 입력 함수
  const infoHandleOnChange = (e) => {
    const { name, value } = e.target;
    setInfos({ ...infos, [name]: value });
  };

  // React DatePicker 함수
  const selectedDateOnChange = (date) => {
    setSelectedDate(date);
  };

  // selected onChange Handler
  const selectedHandleOnChange = (name) => {
    if (selectedRadioValue === name) {
      setSelectedRadioValue('');
    } else {
      setSelectedRadioValue(name);
    }
  };

  // checkbox onChange handler
  const checkedHandleOnChange = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setCheckedValues((prev) => [...prev, value]);
    } else {
      setCheckedValues((prev) => {
        return [...prev.filter((item) => item !== value)];
      });
    }
  };

  // Form 저장하기 함수
  const handleOnSubmit = (e) => {
    e.preventDefault();
  };

  // ====서버 404 에러로인해 통신을 못 하였습니다. 따라서 데이터를 불러오지도 저장하지도 못 하였습니다.====//

  // const { data, isLoading, isSuccess, isError } = useQuery({
  //   queryKey: ['infos'],
  //   queryFn: getTest
  // });

  // if (isLoading) return <p>로딩중입니다...</p>;
  // if (isError) return <p>오류가 발생하였습니다...</p>;

  return (
    <StDetailContainer>
      <StDetailHeader>
        <h3>타이틀</h3>
      </StDetailHeader>
      <StDetailForm onSubmit={handleOnSubmit}>
        <StDetailFormBox>
          {/* 정보 1 */}
          <StInfo>
            <Info title='정보 1' description='정보 내용 1' />
          </StInfo>

          {/* 정보 2 */}
          <StInfo>
            <Input label='정보 2' name='info2' value={info2} onChange={infoHandleOnChange} />
          </StInfo>

          {/* 정보 3 */}
          <StInfo>
            <Info title='정보 3' description='정보 내용 3' />
          </StInfo>

          {/* 정보 4 */}
          <StInfo>
            <Input label='정보 4' name='info4' value={info4} onChange={infoHandleOnChange} />
          </StInfo>

          {/* 날짜 */}
          <StInfo>
            <DatePicker title='날짜' selectedDate={selectedDate} onChange={selectedDateOnChange} />
          </StInfo>

          {/* 정보 5 */}
          <StInfo height='86px'>
            <RadioInput
              label='정보 5'
              radioArray={radioArray}
              selectedRadioValue={selectedRadioValue}
              selectedHandleOnChange={selectedHandleOnChange}
            />
          </StInfo>

          {/* 정보 6 */}
          <StInfo>
            <CheckboxInput
              label='정보 6'
              checkBoxArray={checkBoxArray}
              onChange={checkedHandleOnChange}
            />
          </StInfo>
        </StDetailFormBox>
        <StDetailFormButton>
          <Button>저장</Button>
        </StDetailFormButton>
      </StDetailForm>
    </StDetailContainer>
  );
}

export default DetailContent;
